const { credential } = require('../models');
const { Op } = require('sequelize');
const randomByte = require('random-bytes');
const pbkdf2 = require('pbkdf2');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json').token[env];

class AuthService {
  static registration = async (req) => {
    try {
      const {
        username,
        email,
        fullname,
        password,
        is_admin = false,
      } = req.body;

      const emailOrUsernameExist = await credential.findOne({
        where: {
          [Op.or]: [{ username: username }, { email: email }],
        },
      });

      if (emailOrUsernameExist) {
        throw Error('Username / Email sudah terdaftar');
      }

      const randomSalt = await this.generateSalt();
      const salt = randomSalt.toString('base64');
      const passwordEncrypt = await this.passwordEncrypt(password, salt);

      const user = await credential.create({
        username,
        email,
        fullname,
        password: passwordEncrypt,
        salt: salt,
        is_admin,
      });
      if (user) {
        return user;
      } else {
        throw Error('Registrasi gagal');
      }
    } catch (error) {
      throw error;
    }
  };

  static login = async (req) => {
    try {
      const { username, password } = req.body;

      const user = await credential.findOne({ where: { username: username } });

      if (!user) throw Error('Username atau password yang anda masukkan salah');

      const passwordEncrypt = await this.passwordEncrypt(password, user.salt);
      if (passwordEncrypt !== user.password)
        throw Error('Username atau password yang anda masukkan salah');

      user.token = await this.generateToken();

      return user;
    } catch (error) {
      throw error;
    }
  };

  static generateToken = async (username, email) => {
    return jwt.sign({ username: username, email: email }, config.secret, {
      audience: config.audience,
      issuer: config.issuer,
      expiresIn: config.expiresIn,
    });
  };

  static generateSalt = async () => {
    const byteSize = 16;
    return randomByte(byteSize).then((result) => {
      return result;
    });
  };

  static passwordEncrypt = async (password, salt) => {
    const byteSalt = new Buffer.from(salt, 'base64');
    var derivedKey = pbkdf2.pbkdf2Sync(password, byteSalt, 10000, 32, 'sha1');

    return derivedKey.toString('base64');
  };
}

module.exports = AuthService;
