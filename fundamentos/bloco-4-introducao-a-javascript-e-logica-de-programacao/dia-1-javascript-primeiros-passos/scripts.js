//Exercicio 1
const a = 5;
const b = 2;

let adicao = a + b;
let subtracao = a - b;
let multplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(modulo);

//Exercicio 2 
const num1 = 10;
const num2 = 30;

if(num1 > num2) {
    console.log(num1);
}
else {
    console.log(num2);
}

//Ex 3
const numero1 = 3;
const numero2 = 30;
const numero3 = 12;

if(numero1 > numero2 && numero1 > numero3){
    console.log(numero1);
}
else if(numero2 > numero1 && numero2 > numero3){
    console.log(numero2);
}
else{
    console.log(numero3);
}

//Ex 4
const n = -1;

if(n > 0) {
        console.log("Positivo")
} else if(n < 0) {
        console.log("Negativo")
} else {
            console.log("Zero")
}