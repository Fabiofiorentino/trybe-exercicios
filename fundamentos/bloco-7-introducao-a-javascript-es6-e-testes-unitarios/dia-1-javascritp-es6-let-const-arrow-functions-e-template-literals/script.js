//PARTE 1
//Exercicio 1

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      
      console.log(`${ifScope} ótimo, fui utilizada no escopo !;`);
    } else {
      let  elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  //exercicio 1 segunda opção
  const testingScope2 = (escopo) => {
    escopo === true ? console.log('Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !') : console.log('Não devo ser utilizada fora meu escopo (else)')
    }

  testingScope(false);

//Exercicio 2 

const oddsAndEvens = [13, 3, 4, 10, 7, 2] 
let ordenado = [];

// Seu código aqui.
const ordemCrescente = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = ordemCrescente();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);// será necessário alterar essa linha 😉

//PARTE 2
//Exercicio 1
let resultado = 1;
 const fatorialReturn = (number) => {
     for(let index = 1 ; index <= number; index += 1){
        resultado = resultado * index;
     }
     return resultado
 }

 console.log(fatorialReturn(4))