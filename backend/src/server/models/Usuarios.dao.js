const db = require('../database/db')

const verifyCredentials = async (email, email_pass) => await db('SELECT * FROM usuarios WHERE email = $1 AND email_pass = $2;', [email, email_pass])

module.exports = {
    verifyCredentials
}


