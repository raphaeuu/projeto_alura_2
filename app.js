let numeroSecreto = gerarNumeroAleatorio();

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10: ');

function verificarChute() {
    let chute = documemt.querySelector('input').value;
    console.log('O botão foi clicado!');
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}