
import loginPage from '../support/pages/login'
import shaversPage from '../support/pages/shavers'



describe('login', () => {


    context('quando submeto o formulário', () => {


        it('deve logar com sucesso', () => {

            const user = {
                name: 'Alyson',
                email: 'alyson@gmail.com',
                password: '123456'

            }

            loginPage.submit(user.email, user.password)

            shaversPage.header.userShouldBeLoggedIn(user.name)



        })

        it('não deve logar com senha incorreta', () => {

            const user = {
                name: 'Alyson',
                email: 'alyson@gmail.com',
                password: 'abcdef'
            }

            loginPage.submit(user.email, user.password)


            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            loginPage.noticeShouldBe(message)

        })

        it('não deve logar com email não cadastrado', () => {

            const user = {
                name: 'Alyson',
                email: 'alyson@404.com',
                password: 'abcdef'
            }

            loginPage.submit(user.email, user.password)


            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            loginPage.noticeShouldBe(message)

        })

        it('campos obrigatórios', () => {

            loginPage.submit()
            loginPage.requiredFields('E-mail é obrigatório', 'Senha é obrigatória')

        })


    })

})


/*  context('campos obrigatórios', ()=>{
 
      beforeEach(()=> {
          loginPage.submit()
      })
 
      it('deve validar email', ()=>{
          cy.get('.alert-error')
              .should('have.length', 2)
              .and(($small)=> {
                  expect($small.get(0).textContent).to.equal('E-mail é obrigatório')
                  })
 
      })
 
      it('deve validar senha', ()=>{
          cy.get('.alert-error')
              .should('have.length', 2)
              .and(($small)=> {
                  expect($small.get(1).textContent).to.equal('Senha é obrigatória')
                  })
 
      })
 
  })
 */


context('senha muito curta', () => {

    const passwords = ['1', '12', '123', '1234', '12345']

    passwords.forEach((p) => {
        it(`não deve logar com a senha: ${p}`, () => {
            loginPage.submit('alyson@gmail.com', p)
            loginPage.alertShouldBe('Pelo menos 6 caracteres')


        })
    })

})

context('email no formato correto', () => {

    const emails = ['alyson&gmail.com', 'alyson.com.br', '@gmail.com', '@', 'alyson@', '123341', '@#$@!@#', 'xpoto122']

    emails.forEach((e) => {
        it(`não deve logar com email : ${e}`, () => {
            loginPage.submit(e, '123456')
            loginPage.alertShouldBe('Informe um email válido')


        })
    })

})



