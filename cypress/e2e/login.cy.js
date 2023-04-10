
import loginPage from '../support/pages/views/login'
import shaversPage from '../support/pages/views/shavers'

import data from '../fixtures/users-login.json'


describe('login', () => {


    context('quando submeto o formulário', () => {


        it('deve logar com sucesso', () => {

            const user = data.success

            cy.createUser(user)

            loginPage.submit(user.email, user.password)

            shaversPage.header.userShouldBeLoggedIn(user.name)



        })

        it('não deve logar com senha incorreta', () => {

            const user = data.invpass

            loginPage.submit(user.email, user.password)


            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            loginPage.shared.noticeErrorShouldBe(message)

        })

        it('não deve logar com email não cadastrado', () => {

            const user = data.email404

            loginPage.submit(user.email, user.password)


            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            loginPage.shared.noticeErrorShouldBe(message)

        })

        it('campos obrigatórios', () => {

            loginPage.submit()
            loginPage.requiredFields('E-mail é obrigatório', 'Senha é obrigatória')

        })


    })

})


context('senha muito curta', () => {

     

    data.shortpass.forEach((p) => {
        it(`não deve logar com a senha: ${p}`, () => {
            loginPage.submit('alyson@gmail.com', p)
            loginPage.shared.alertShouldBe('Pelo menos 6 caracteres')


        })
    })

})

context('email no formato correto', () => {

    data.invemails.forEach((e) => {
        it(`não deve logar com email : ${e}`, () => {
            loginPage.submit(e, '123456')
            loginPage.shared.alertShouldBe('Informe um email válido')


        })
    })

})



