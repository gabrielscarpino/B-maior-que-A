const form = document.getElementById('class-form');

function validaForm(numero1, numero2) {
    if (numero2 > numero1) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numberA = document.getElementById('caixa-a');
    const numberB = document.getElementById('caixa-b');
    const mensagemInsucesso = `O número B: ${numberB.value} não é maior que o número A: ${numberA.value} formulário inválido`;
    const mensagemSucesso= `O número B:${numberB.value} é maior que o número A:${numberA.value} formulário válido e submetido`;

    formValido = validaForm(Number(numberA.value),(Number(numberB.value));

    if (!formValido) {
        alert(mensagemInsucesso)
    } else {
        alert(mensagemSucesso)

        numberA.value = ' ';
        numberB.value = ' ';
    }

})

console.log(form);
