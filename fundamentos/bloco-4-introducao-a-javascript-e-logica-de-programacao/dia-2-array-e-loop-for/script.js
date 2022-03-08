// utilizamos esse array para os exercicios do 1 ao 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);
console.log(numbers[8]);
console.log(numbers[9]);

//Exercicio 2
let soma = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];

console.log("A soma é: " + soma);

//Exercicio 3
let media = soma / numbers.length;
console.log("A média é: " + media);

//Exercicio 4
if(media > 20){
    console.log("Valor maior que 20");
}
else{
    console.log("Valor menor ou igual a 20");
}

//Exercicio 5
let maiorNumero = numbers[0];

for(let index = 1; index < numbers.length; index += 1){
    if(numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }  
}
console.log("O maior número é: " + maiorNumero);

//Exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0) {
        impar += 1 ;
    }  
    else{
        impar = impar;
    }
}
    if(impar === 0){
        console.log("Nenhum valor impar encontrado");
    }
        else{
        console.log("Existem " + impar + " numeros impares");
    }

//Exercicio 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for(let index = 1; index < numbers.length; index += 1){
    if(numbers[index] < menorNumero){
        menorNumero = numbers[index];
    }  
}
console.log("O menor número é: " + menorNumero);

//Execicio 8
let array = [];
for(i = 1; i < 26; i += 1){
    array.push(i);
}
console.log(array);

//Exercicio 9
let divisao = [];
for(index = 0; index < array.length; index += 1){
    divisao.push(array[index] / 2);
}
console.log(divisao);