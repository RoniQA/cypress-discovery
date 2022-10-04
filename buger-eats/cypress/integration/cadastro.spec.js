import SignupPage from '../pages/SignupPage'

describe('Cadastro', ()=>{
    it('Usuário deve se tornar um entregador', ()=>{

        var deliver = {
            name: 'Ronierison Costa',
            cpf: '12332145665',
            email: 'roninqa@hotmail.com',
            whatsapp: '85999999999',
            address: {
                postal_code: '60862460',
                street:'Rua Regina de Fátima',
                number: '1234',
                details: 'Casa A',
                district: 'Passaré',
                city_state: 'Fortaleza/CE',
            },
            deliver_method: 'Moto',
            driver_license: 'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillform(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage) 

    })

    it('CPF incorreto', ()=>{

        var deliver = {
            name: 'Ronierison Costa',
            cpf: '123321456AA',
            email: 'roninqa@hotmail.com',
            whatsapp: '85999999999',
            address: {
                postal_code: '60862460',
                street:'Rua Regina de Fátima',
                number: '1234',
                details: 'Casa A',
                district: 'Passaré',
                city_state: 'Fortaleza/CE',
            },
            deliver_method: 'Moto',
            driver_license: 'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillform(deliver)
        signup.submit()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')

    })
})