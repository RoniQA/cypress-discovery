var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var date = {
                name: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '85999999999',
                address: {
                    postal_code: '60862460',
                    street:'Rua Regina de Fátima',
                    number: '1234',
                    details: 'Casa A',
                    district: 'Passaré',
                    city_state: 'Fortaleza/CE'
                },
                deliver_method: 'Moto',
                driver_license: 'cnh-digital.jpg'
        }

        return date

    }
}