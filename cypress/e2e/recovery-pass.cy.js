import fpPage from '../support/pages/views/forgot-pass'
import rpPage from '../support/pages/views/reset-pass'
import loginPage from "../support/pages/views/login"
import shaversPage from "../support/pagesviews//shavers"

describe('esqueci minha senha', () => {



    it('deve poder solicitar o resgate de senha', () => {

        const user = {

            name: 'Joao Esquecido',
            email: 'joao@gmail.com',
            password: '123456',
            is_shaver: false

        }

        cy.createUser(user)

        fpPage.go()
        fpPage.submit(user.email)

        const message = 'Enviamos um e-mail para confirmar a recuperação de senha, verifique sua caixa de entrada.'
        fpPage.noticeShoulBe(message)


    })

    context.only('quando o usuário solicita o resgate de senha', () => {

        const user = {
            name: "João",
            email: "joao@gmail.com",
            password: "1234563",
            is_shaver: false
        }

        beforeEach(() => {
            cy.createUser(user)
            cy.recoveryPass(user.email)
            cy.getToken(user.email)
            console.log();
        })

        it('deve poder cadastrar uma nova senha', () => {
      
        rpPage.go(Cypress.env('passToken'))
        rpPage.submit('1234563', '1234563')
        
        const message = 'Agora você já pode logar com a sua nova senha secreta.'
        rpPage.noticeShouldBe(message)      
        
        })

        afterEach(() => {
            loginPage.submit(user.email, '1234563')
            shaversPage.header.userShouldBeLoggedIn(user.name)
        })

    })

})