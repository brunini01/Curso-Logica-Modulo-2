/*Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil.
Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.*/


let h1 = document.querySelector('h1');
let = h1.innerHTML= 'Hora do Desafio';

function verificarBotao(){
    console.log("O botão foi clicado");
}
function verificarAlert(){
    alert("Eu amo js");
}

function verificarCidade(){
    let cidade = prompt("Em qual cidade voce esteve");
    alert(`Estive em ${cidade} e lembrei de voce`);
}

function verificarSoma(){
    let n1 = parseInt(prompt("Digite um numero"));
    let n2 = parseInt(prompt("Digite um numero"));
    
    alert(n1+n2);
 }