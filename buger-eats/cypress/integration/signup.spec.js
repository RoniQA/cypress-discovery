import signup from '../pages/SignupPage'

describe('Signup', () => {

    beforeEach(function() {
        cy.fixture('deliver').then((d)=> {
            this.deliver = d
        })
    }) 

    it('User should be a deliver', function() {

        signup.go()
        signup.fillform(this.deliver.signup)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage) 

    })

    it('Incorrect document', function() {

        signup.go()
        signup.fillform(this.deliver.cpf_inv)
        signup.submit()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')

    })

    it('Incorrect email', function() {

        signup.go()
        signup.fillform(this.deliver.email_inv)
        signup.submit()

        cy.get('.alert-error').should('have.text', 'Oops! Email com formato inválido.')

    })
})