
const Boom = require("@hapi/boom")
const dotenv = require("dotenv")
const Jwt = require('jsonwebtoken')
const UsuarioService = require('../services/usuario-service')

const bcrypt = require('bcrypt')

dotenv.config()

class AuthHandler{

    constructor(){
        this.usuarioService = new UsuarioService()
    }

    authenticate = async (request, h) => {

        const usuario = await this.usuarioService.getByLogin(request.payload.login)

        if(!usuario) throw Boom.notFound("Usuário não encontrado")
        console.log(usuario)
        //if(!usuario.active) throw Boom.badRequest(Messages.Pessoa.Inativo)

        if(!await bcrypt.compareSync(request.payload.senha, usuario.senha)) throw Boom.unauthorized("Senha/Usuário inválido")

        let claims = {
            sub: usuario.id,
            login: usuario.login,
            createdAt: usuario.createdAt,
        }

        const token = Jwt.sign(claims, process.env.JWT_SECRET)

        return h
            .response({ token })
            .code(200)
    }

    validateToken = async (decoded, request, h) =>{

        console.log(decoded)

        return {
            isValid: true,
            // credentials: { user: decoded.decoded.payload.user }
        };

    }
}
module.exports = new AuthHandler()