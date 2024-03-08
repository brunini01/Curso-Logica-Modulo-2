let = numeroSecreto = randomNumber();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo= document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMsgInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 1000');
}

exibirMsgInicial();

console.log(numeroSecreto);
function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagensTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O numero secreto é menor');
    }else {
        exibirTextoNaTela('p', 'O Numero secreto é maior');
    }
    tentativas++;
    limparCampo();
}

function randomNumber(){
   return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = randomNumber();
    limparCampo();
    tentivas = 1;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}