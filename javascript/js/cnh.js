function verificarIdade() {

    var nome = document.querySelector("input[name=name]")
    var idade = document.querySelector("input[name=idade]")

    if (idade.value.length == 0) {
        alert('Idade é um campo obrigatório.')
        return
    }

    var idadeNum = parseInt(idade.value)

    if (idadeNum >= 18) {
        alert('Ok, você pode tirar sua CNH.')
    } else if (idadeNum > 4) {
        alert('Infelizmente você não tem idade para tirar sua CNH.')
    } else {
        alert('Vá tomar leitinho.')
    }

}