// import Joi from 'joi'
// import OperacaoHandler from '#handler/operacao'

const Joi = require('joi')
const OperacaoHandler = require('#handler/operacao')

//export default [
module.exports = [
    {
        method: 'POST',
        path: '/api/v1/operacao',
        config: {
            auth: 'jwt',
            handler: OperacaoHandler.add,
            validate: {
                payload: Joi.object({
                    tipo: Joi.string().required(),
                    valor: Joi.number().min(1).required(),
                    contaOrigemId: Joi.string().guid().required(),
                    contaDestinoId: Joi.string().guid(),
                })
            }
        }
    },
    {
        method: 'GET',
        path: '/api/v1/operacao',
        handler: OperacaoHandler.getAll,
    },
    {
        method: 'GET',
        path: '/api/v1/operacao/{id}',
        config: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid()
                }),
            },
        },
        handler: OperacaoHandler.getAll,
    },
]