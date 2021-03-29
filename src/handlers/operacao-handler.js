// import BaseHandler from "#handler/base"
// import OperacaoService from '#service/operacao'

const BaseHandler = require("#handler/base")
const OperacaoService = require('#service/operacao')

class OperacaoHandler extends BaseHandler{

    constructor(){
        super("operacao", new OperacaoService())
    }

    async getByAccount(request, h) {

        const id = request.params.id

        return h.response(await OperacaoService.getByAccount(id)).code(200)

    }

}

//export default new OperacaoHandler()

module.exports = new OperacaoHandler()