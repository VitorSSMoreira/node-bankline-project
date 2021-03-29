const Joi = require('joi')
const OperacaoHandler = require('#handler/operacao')

//export default [
module.exports = [
    {
        method: 'GET',
        path: '/api/v1/extrato/{id}/conta-corrente',
        config: {
            auth: 'jwt',
            handler: OperacaoHandler.getByAccount,
            validate:{
                params: Joi.object({
                    id: Joi.string().guid()
                }),
            }
        }
    },
]