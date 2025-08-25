# 💈 Testes Automatizados - Barbearia Totem

Este repositório contém testes automatizados criados para uma pequena aplicação web de uma **barbearia** que roda em um **totem de autoatendimento**.  
O objetivo é garantir que todas as funcionalidades do aplicativo estejam funcionando corretamente e sem erros, para que os clientes possam **agendar cortes de cabelo de forma fácil e intuitiva**.  

Os testes foram escritos utilizando o framework **Cypress** e são executados em um ambiente local.

---

## 🌿 Estrutura das Branches

O projeto possui **duas branches principais**, cada uma explorando uma abordagem diferente de organização dos testes:

### 🔹 Branch POM (Page Object Model)
- Estruturada seguindo o padrão **Page Object Model (POM)**.  
- As páginas da aplicação foram mapeadas em **objetos separados**, permitindo:  
  - Melhor organização do código.  
  - Manutenção facilitada dos testes.  

### 🔹 Branch Custom Commands
- Criados **comandos personalizados (custom commands)** no Cypress.  
- Esses comandos encapsulam funções comuns, possibilitando:  
  - Reutilização em diferentes testes.  
  - Código mais legível e fácil de manter.  

Ambas as branches foram criadas para **explorar diferentes abordagens** de estruturação de testes automatizados, avaliando a melhor forma de garantir a **qualidade do software**.

---

## 📦 Dependências utilizadas

- **[bcrypt](https://www.npmjs.com/package/bcrypt)** – criptografia de senhas.  
- **[cypress](https://www.cypress.io/)** – framework para testes E2E automatizados.  
- **[cypress-tesults-reporter](https://www.npmjs.com/package/cypress-tesults-reporter)** – integração com **Tesults** para geração de relatórios.  
- **[dotenv](https://www.npmjs.com/package/dotenv)** – gerenciamento de variáveis de ambiente via `.env`.  
- **[express](https://expressjs.com/)** – framework para aplicações web em Node.js.  
- **[express-joi-validation](https://www.npmjs.com/package/express-joi-validation)** – validação de dados em requisições HTTP usando **Joi**.  
- **[joi](https://joi.dev/)** – biblioteca para validação de dados em Node.js.  
- **[nodemon](https://nodemon.io/)** – reinicialização automática da aplicação ao detectar alterações.  
- **[pg](https://www.npmjs.com/package/pg)** – driver para conexão com bancos de dados **PostgreSQL**.  
