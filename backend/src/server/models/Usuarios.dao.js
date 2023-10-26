const db = require('../database/db')

const verifyCredentials = async (email, password) => await db('SELECT * FROM usuarios WHERE email = $1 AND password = $2;', [email, password])

module.exports = {
    verifyCredentials
}


