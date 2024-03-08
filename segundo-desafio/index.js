helloWorld();
helloName();
doubleNumber()
media()
twoNumber()
multi()

//Criar uma função que exibe "Olá, mundo!" no console.
function helloWorld(){
    console.log("Olá, mundo!");
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function helloName(){
    let nome = prompt("Qual seu nome");
    console.log(`Olá, ${nome}`);
}

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function doubleNumber(){
    let numero = prompt("Digite um numero para receber o dobro dele");
    alert(numero*2);
}

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(){
    let media = 0

    for(i=0;i<3;i++){
    let nota = parseFloat(prompt("Digite a nota"));
    media = media + nota;
}
    media = media / 3;
    alert(media);
}

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function twoNumber(){
    let n1 = parseInt(prompt("Digite um numero"));
    let n2 = parseInt(prompt("Digite outro numero"));

    if(n1>n2){
        alert(`O numero maior é ${n1}`);
    }else{
        alert(`O numero maior é ${n2}`);
    }
}

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multi(){
    let numero = prompt("Digite um numero para receber ele vezes ele mesmo:");
    alert(numero*numero);
}