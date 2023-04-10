const baseUrlHelper = 'http://localhost:5000/'
const baseUrlApi = 'http://localhost:3333/'

Cypress.Commands.add('createUser', (user) => {
    cy.log(JSON.stringify(user))

    cy.request({
        method: 'POST',
        url: `${baseUrlHelper}user`,
        body: user
    }).then(function (response) {
        expect(response.status).to.eq(201)
    })
})

    Cypress.Commands.add('deleteUser', (email) => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrlHelper}email`,
        }).then(function (response) {
            expect(response.status).to.eq(204)
        })
    })

    Cypress.Commands.add('recoveryPass', (email) => {
        cy.request({
            method: 'POST',
            url: `${baseUrlApi}password/forgot`,
            body: { email: email }
        }).then(result => {
            expect(result.status).to.eql(204)
        })
    })

    Cypress.Commands.add('getToken', (email) => {
        cy.request({
            method: 'GET',
            url: `${baseUrlHelper}token/`+ email
        }).then(result => {
            expect(result.status).to.eql(200)
            cy.log(result.body.token)
            Cypress.env('passToken', result.body.token)
        })

        
    })


    Cypress.Commands.add('loginApi',(user) =>{
        cy.request({
            method: 'POST',
            url: `${baseUrlApi}sessions`,
            body: { email: user.email, password: user.password }
        }).then(response => {
            expect(response.status).to.eql(200)
    
            const {user, token} = response.body
    
            window.localStorage.setItem('@ShaveXP:token', token)
            window.localStorage.setItem('@ShaveXP:user', JSON.stringify(user))
        })
        cy.visit('/')

    })