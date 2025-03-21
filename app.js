exibirTextoNaTela('h1','jogo de adivinhação');
exibirTextoNaTela('p','escolhaum número entre 1 a 100');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function verificarChute() {
    alert('apertou o botão');
}