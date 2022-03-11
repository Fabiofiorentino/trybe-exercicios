//1
let fatorial = 10;
let resultado = fatorial;

for(let i = 1; i < fatorial; i += 1){
    resultado = resultado * (fatorial - i);
}

console.log(resultado);

//2
let word = 'tryber';
let reverseWord = '';

for (let i = 0; i < word.length; i += 1) {
  reverseWord += word[word.length - 1 - i];
}

console.log(reverseWord);