import signup from '../pages/SignupPage'
import signupfactory from '../factories/SignupFactory'
import SignupFactory from '../factories/SignupFactory'

describe('Signup', () => {

    //beforeEach(function() {
    //  cy.fixture('deliver').then((d)=> {
    //      this.deliver = d
    //   })
    //}) 

    it('User should be a deliver', function() {

        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillform(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage) 

    })

    it('Incorrect document', function() {

        var deliver = SignupFactory.deliver()

        deliver.cpf = '000000151aa'

        signup.go()
        signup.fillform(deliver)
        signup.submit()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')

    })

    it('Incorrect email', function() {

        var deliver = SignupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go()
        signup.fillform(deliver)
        signup.submit()

        cy.get('.alert-error').should('have.text', 'Oops! Email com formato inválido.')

    })
})