# NodeJS - Bankline
## Objetivo

Desenvolver uma aplicação para cadastro de usuários, contas e registro de transações entre contas bancárias.

## Tecnologias

- NodeJS
- HapiJS
- Sequelize
- JWT
- Bcrypt
- PostgreSQL
- MongoDB
- Mocha

## Resumo

Para atingir o escopo proposto, foi desenvolvida uma API contendo todas as funcionalidades necessárias para a criação de usuários e a realização de transferências entre as contas bancárias cadastradas na aplicação.

## Endpoints

Foram criados ***endpoints*** separados para cada funcionalidade, seguindo assim, os princípios *REST*.

> Um ***Endpoint\*** é a *URL* onde seu serviço pode ser acessado por uma aplicação cliente.

### Endpoinst criados

Segue descrição dos endpoints criados para as funcionalidades:

### Login 

Endpoint utilizado para login de usuários cadastrados na aplicação.

| Método | Endpoint      | Informação                   |
| ------ | ------------- | ---------------------------- |
| POST   | /api/v1/login | Realiza o login na aplicação |

### Usuários (Pessoa)

Endpoints relacionados aos usuários cadastrados na aplicação.

| Método | Endpoint           | Informação                                                   |
| ------ | ------------------ | ------------------------------------------------------------ |
| GET    | /api/v1/pessoa/:id | Recupera as informações do usuário cadastrado com o ***id*** passado como parâmetro |
| POST   | /api/v1/pessoa     | Insere um usuário juntamente com uma conta corrente associada |
| PUT    | /api/v1/pessoa/:id | Atualiza informações do usuário com o ***id*** passado como parâmetro |
| DELETE | /api/v1/pessoa/:id | Remove o usuário com o ***id*** passado como parâmetro       |

### Conta-corrente

Endpoints relacionados as informações de conta-corrente do usuário na aplicação.

| Método | Endpoint                   | Informação                                                   |
| ------ | -------------------------- | ------------------------------------------------------------ |
| GET    | /api/v1/conta-corrente/:id | Recupera as informações da conta-corrente do usuário cadastrado com o ***id*** passado como parâmetro |

### Operação

Endpoints relacionados ao operações disponíveis na aplicação.

| Método | Endpoint         | Informação                                                   |
| ------ | ---------------- | ------------------------------------------------------------ |
| GET    | /api/v1/operacao | Endpoint para a realização das transações na aplicação (Deposito, Retirada ou Transaferência) |

### Extrato

Endpoints relacionados as operações de extrato.

| Método | Endpoint                           | Informação                                            |
| ------ | ---------------------------------- | ----------------------------------------------------- |
| GET    | /api/v1/extrato/:id/conta-corrente | Endpoint para a extração do extrato da conta-corrente |

------

## Colaboradores

- Bruno da Silva Barros

- Gabriel Sena

- Vitor da Silva Santos Moreira