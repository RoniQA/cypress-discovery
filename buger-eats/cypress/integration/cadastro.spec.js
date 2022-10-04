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
                postalcode: '60862460',
                street:'Rua Regina de Fátima',
                number: '1234',
                details: 'Casa A',
                district: 'Passaré',
                city_state: 'Fortaleza/CE',
            },
            delivery_method: 'Moto',
            driver_license: 'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()

        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()

        cy.get('input[accept^="image/*"]').attachFile('/images/' + deliver.driver_license)

        cy.get('form button[type="submit"]').click()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')

    })
})