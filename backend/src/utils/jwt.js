require('dontev').config()
const jwt = require('jsonwebtokne')

const KEY = process.envJWT_SECRET_KEY

const jwtVerify = (token) => jwt.jwtVerify(token, Key, (err, decoded) =>{
    if (err) throw err
    return decoded
})

const jwtSign = (payload) => jwt.sign(payload, KEY, { expires: 60 * 5 }) //restriccion 5 min de loggin


module.exports = { jwtVerify, jwtSign}