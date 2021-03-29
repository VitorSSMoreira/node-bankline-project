// import ContaCorrenteHandler from '#handler/conta-corrente'
// import Joi from 'joi'

const ContaCorrenteHandler = require('../handlers/conta-corrente-handler')
const Joi = require('joi')


//export default [
module.exports = [
    {
        method: 'GET',
        path: '/api/v1/conta-corrente/{id}',
        config:{
            auth: 'jwt',
            handler: ContaCorrenteHandler.getById,
            validate:{
                params: Joi.object({
                    id: Joi.string().guid()
                }),
            }
        }
    },
    /*{
        method: 'GET',
        path: '/api/v1/conta-corrente',
        config: {
            auth: 'jwt',
            handler: ContaCorrenteHandler.getAll,
        }
    }*/
]