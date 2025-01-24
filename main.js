const form = document.getElementById('class-form');
const numberA = document.getElementById('caixa-a');
const numberB = document.getElementById('caixa-b');
const mensagemInsucesso = `O número B: ${numberB.value} não é maior que o número A: ${numberA.value} formulário inválido`;
const mensagemSucesso= `O número B ${numberB.value} é maior que o número A:${numberA.value} formulário válido e submetido`;

function validaForm(numero1, numero2) {
    if (numero2 > numero1) {
        return true;
    } else {
        return false;
    }
}
formValido = validaForm((numberA.value),(numberB.value));

form.addEventListener('submit', function(e) {
    e.preventDefault();


    if (!formValido) {
        alert(mensagemInsucesso)
    } else {
        alert(mensagemSucesso)

        numberA.value = ' ';
        numberB.value = ' ';
    }

})

