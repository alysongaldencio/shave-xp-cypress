# shave-xp-cypress
Repositório dos Testes Automatizados construídos no Bootcamp Cypress eXperience da QAxperience
Olá pessoal,
Estes testes foram criados para uma pequena aplicação web de uma barbearia que roda em um totem de autoatendimento. 
O objetivo é garantir que todas as funcionalidades do aplicativo estejam funcionando corretamente e sem erros, 
para que os clientes possam agendar seus cortes de cabelo de forma fácil e intuitiva. 
Os testes foram escritos usando o framework Cypress e são executados em um ambiente local.

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

Como executar os testes (importante resaltar que os testes foram desenvolvidos para a aplicação Shave-Xp fornecida pela QAxperience rodando em ambiente local)
Para executar os testes, siga as instruções abaixo:

Clone este repositório em sua máquina local.
Instale as dependências com o comando npm install.
Crie um arquivo .env na raiz do projeto e preencha as variáveis de ambiente necessárias.
Inicie o servidor de teste com o comando npm run start.
Em outra janela do terminal, execute os testes com o comando npm run cypress.
Os resultados dos testes serão exibidos no terminal e também serão enviados para o Tesults, onde será gerado um relatório detalhado.
