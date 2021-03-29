// import BaseHandler from "#handler/base"
// import OperacaoService from '#service/operacao'

const BaseHandler = require("#handler/base")
const OperacaoService = require('#service/operacao')
const service = new OperacaoService()

class OperacaoHandler extends BaseHandler{

    constructor(){
        super("operacao", new OperacaoService())
    }
    async getByAccount(request, h) {

        const id = request.params.id

        return h.response(await OperacaoService.getByAccount(id)).code(200)

    }

}

    async getByAccount(request, h){

        const id = request.params.id

        const result = await service.getByAccountId(id)

        return h.response(result).code(200)

    }
}

module.exports = new OperacaoHandler()