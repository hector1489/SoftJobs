const db = require('../database/db')

const findUsuarios = async () => await db('SELECT * FROM usuarios;')

const findUsuarioById = async (id) => await db('SELECT * FROM usuarios WHERE id = $1;', [id])

const createUsuario = async ({ email, email_pass, rol, language }) => {
    const query = 'INSERT INTO usuarios (email, email_pass, rol, language) VALUES ($1, $2, $3, $4) RETURNING *;'
    const values = [email, email_pass, rol, language]
    return await db(query, values)
}

const updateUsuario = async (id, { email, email_pass, rol, language }) => {
    const query = 'UPDATE usuarios SET email = $2, email_pass = $3, rol = $4, language = $5 WHERE id = $1 RETURNING *;'
    const values = [id, email, email_pass, rol, language]
    return await db(query, values)
}

const deleteUsuario = async (id) => await db('DELETE FROM usuarios WHERE id = $1 RETURNING *;', [id])

module.exports = {
    findUsuarios,
    findUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
}
