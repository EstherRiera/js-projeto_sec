let tentativas = 5;


exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 500');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 500 + 1);
}
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'errou!o número secreto é menor.')
    } else {
        exibirTextoNaTela('h1', 'errou!o número secreto é maior.')
    }

    tentativas--; // Diminui o número de tentativas a cada erro
        console.log(chute === numeroSecreto);

        // Exibe o número de tentativas restantes
        exibirTextoNaTela('h1', `Tentativas restantes: ${tentativas}`);
       
        // Se as tentativas acabaram, exibe mensagem de fim de jogo
        if (tentativas === 0) {
            exibirTextoNaTela('h1', 'Fim de jogo! Você perdeu!');

            let palavraTentativa = tentativas === 1 ? 'tentativa' : 'tentativas';

}
    }
