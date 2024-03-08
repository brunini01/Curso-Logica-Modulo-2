/*Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a 
partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.*/

imc();
180
function imc(){
    let altura = parseFloat(prompt("Digite a sua altura:"));
    let peso = parseFloat(prompt("Digite a seu peso:"));

    let calculo = peso/(altura * 2);
    alert(`O seu imc é: ${calculo}`);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

fatorial();

function fatorial(){
let numero = prompt("Digite um número para o cálculo do valor fatorial:");
let resultado = 1;
for (let i = 1; i <= numero; i++) {
    resultado *= i;
}

alert(`O fatorial de ${numero} é: ${resultado}`);
}

/*Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor 
equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.*/
function dolar(){
let dolar = parseFloat(4.80);
let real = parseFloat(prompt("Digite o valor em dolar a ser convertido:"));

alert(dolar*real);
}

/*Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
utilizando altura e largura que serão dadas como parâmetro.*/
area();

function area() {
    let altura = parseFloat(prompt("Digite a altura da sala:"));
    let largura = parseFloat(prompt("Digite a largura da sala:"));

    let area = parseFloat(altura*largura);
    let perimetro = parseFloat(altura+largura);

    alert(`O perimetro da é: ${perimetro} e a area é: ${area} `);
}

/*Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.*/

function circulo(){

let pi = 3.14;
let raio = parseFloat(prompt("Digite o raio da area"));
let area = parseFloat(pi*raio*raio);
let perimetro = parseFloat(2*pi*raio);

alert(`O perimetro da é: ${perimetro} e a area é: ${area}`);
}

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
tabuada();

function tabuada() {
    
    let numero = prompt('Digite qual o numero da tabuada')

    for(i=1;i<11;i++){
        let res = numero * i;
        alert(`${numero} x ${i} = ${res}` );
    }
}