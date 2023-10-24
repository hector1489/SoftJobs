const { jwtVerify } = require('../../utils/jwt')

const verifyToken = (req, res, next) => {
    const authorizationHeader = req.headers.authorizationHeader
    if (!authorizationHeader) {
        return res.status(401).json({
            code: 401,
            message: 'Token no proporcionado.'
        })
    }

    const [bearer, token] = authorizationHeader.split(' ')
    if (bearer !== 'Bearer' || !token) {
        return res.status(401).json({
            code: 401,
            message: 'Fromato de token invalido.'
        })
    }

    try {
        jwtVerify(token) && next()
    }   catch (error) {
        return res.status(401).json({
            code: 401,
            message: 'Token invalido.'
        })
    }
}

module.exports = {
    verifyToken
}
