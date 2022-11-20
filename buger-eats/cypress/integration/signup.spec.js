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

        signup.alertMessageShouldbe('Oops! CPF inválido')

    })

    it('Incorrect email', function() {

        var deliver = SignupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShouldbe('Oops! Email com formato inválido.')
    })

    it('Required fields', function() {
        signup.go()
        signup.submit()
        signup.alertMessageShouldbe('É necessário informar o nome')
        signup.alertMessageShouldbe('É necessário informar o CPF')
        signup.alertMessageShouldbe('É necessário informar o email')
        signup.alertMessageShouldbe('É necessário informar o CEP')
        signup.alertMessageShouldbe('É necessário informar o número do endereço')
        signup.alertMessageShouldbe('Selecione o método de entrega')
        signup.alertMessageShouldbe('Adicione uma foto da sua CNH')
    })
})