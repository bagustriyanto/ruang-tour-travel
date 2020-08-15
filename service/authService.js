const { credential } = require('../models');
const { Op } = require('sequelize');
const randomByte = require('random-bytes');
const pbkdf2 = require('pbkdf2');

class AuthService {
  static registration = async (req) => {
    const { username, email, fullname, password, is_admin = false } = req.body;

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
  };

  static login = async (req) => {
    const { username, password } = req.body;
  };

  static logout = async () => {
    const { username } = req.body;
  };

  static generateToken = async () => {};

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
