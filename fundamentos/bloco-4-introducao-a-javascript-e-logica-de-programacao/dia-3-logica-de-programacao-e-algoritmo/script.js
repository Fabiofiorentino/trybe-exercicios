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

//3
let array = ['java', 'javascript', 'python', 'html', 'css'];

let bigWord = array[0];
let smallWord = array[0];

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > bigWord.length) {
    bigWord = array[i];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallWord.length) {
    smallWord = array[index];
  }
}

console.log(bigWord);
console.log(smallWord);

