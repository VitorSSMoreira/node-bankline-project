const PessoaRoutes = require('#route/pessoa')
const ContaCorrenteRoutes = require('#route/conta-corrente')
const OperacaoRoutes = require('#route/operacao')
const AuthRoutes = require('./security/auth-routes')
const ExtratoRoutes = require('./routes/extrato-routes')

//export default [
module.exports = [
    ...PessoaRoutes,
    ...ContaCorrenteRoutes,
    ...OperacaoRoutes,
    ...AuthRoutes,
    ...ExtratoRoutes
]