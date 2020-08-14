const { credential } = require('../models')

class AuthService {
    static registration = async (req) => {
        await credential.create(req.body)
            .then(result => {
                if (result) {
                    return result
                }
            })
            .catch(err => {
                return err
            })
    }

    static login = async (req) => {
        const { username, password } = req.body
    }

    static logout = async () => {
        const { username } = req.body
    }

    static generateToken = async () => {
    }
}

module.exports = AuthService