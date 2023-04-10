
describe('esqueci minha senha', () => {



    it('deve poder solicitar o resgate de senha', () => {

        const user = {

            name: 'Joao Esquecido',
            email: 'joao@gmail.com',
            password: '123456',
            is_shaver: false

        }

        cy.createUser(user)

        cy.requestPassword(user.email)

        const message = 'Enviamos um e-mail para confirmar a recuperação de senha, verifique sua caixa de entrada.'
        cy.noticeSuccessShouldBe(message)


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
      
        cy.resetPassword(Cypress.env('passToken'),'1234563', '1234563')
        
        const message = 'Agora você já pode logar com a sua nova senha secreta.'
        cy.noticeSuccessShouldBe(message)      
        
        })

        afterEach(() => {
            cy.submitLogin(user.email, '1234563')
            cy.userShouldBeLoggedIn(user.name)
        })

    })

})