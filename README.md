
Olá pessoal,
Estes testes foram criados para uma pequena aplicação web de uma barbearia que roda em um totem de autoatendimento. 
O objetivo é garantir que todas as funcionalidades do aplicativo estejam funcionando corretamente e sem erros, 
para que os clientes possam agendar seus cortes de cabelo de forma fácil e intuitiva. 
Os testes foram escritos usando o framework Cypress e são executados em um ambiente local.

Este projeto possui duas branches principais: uma estruturada em Page Object Model (POM) e outra em Custom Commands.
A branch POM foi organizada seguindo o padrão de design POM, que é uma abordagem de estruturação de código para testes automatizados. Nessa branch, as páginas da aplicação foram mapeadas em objetos separados, permitindo uma melhor organização do código e uma manutenção mais fácil dos testes.
Já na branch Custom Commands, foram criados comandos personalizados (custom commands) para facilitar a escrita dos testes. Esses comandos encapsulam funções comuns e podem ser reutilizados em diferentes testes, tornando o código mais legível e fácil de manter.
Ambas as branches foram criadas para explorar diferentes abordagens de organização e estruturação de testes automatizados, com o objetivo de encontrar a melhor maneira de garantir a qualidade do software.

Dependências utilizadas
bcrypt: biblioteca para criptografia de senhas.
cypress: framework para testes E2E automatizados em aplicações web.
cypress-tesults-reporter: plugin para integração do Cypress com o serviço Tesults, que permite gerar relatórios de testes.
dotenv: biblioteca para carregar variáveis de ambiente de um arquivo .env.
express: framework para criação de aplicações web em Node.js.
express-joi-validation: plugin para validação de dados de entrada em requisições HTTP usando o schema Joi.
joi: biblioteca para validação de dados em Node.js.
nodemon: biblioteca que monitora alterações no código e reinicia automaticamente a aplicação.
pg: driver para conexão com bancos de dados PostgreSQL.



