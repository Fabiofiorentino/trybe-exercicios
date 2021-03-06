function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

function createNumbersOfTheCalendar() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const monthDaysList = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {

    const numCalendar = dezDaysList[index];
    const numCalendarList = document.createElement('li');
    numCalendarList.className = 'day';
    numCalendarList.innerText = numCalendar;
    monthDaysList.appendChild(numCalendarList);

    if (numCalendar === 25){

      numCalendarList.className = 'day friday holiday';
    } else if ((numCalendar === 24) || (numCalendar === 25) || (numCalendar === 31)) {

      numCalendarList.className = 'day holiday';
      
    } else if ((numCalendar === 4) || (numCalendar === 11) || (numCalendar === 18) || (numCalendar === 25)) {

      numCalendarList.className = 'day friday';

    }

  }

}

createNumbersOfTheCalendar();

//2 Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

//Adicione a este botão a ID "btn-holiday" .

//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createHolidaysButton (buttonName) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const holidayButtons = document.createElement('button');
  holidayButtons.id = 'btn-holiday';
  holidayButtons.innerHTML = buttonName;
  buttonsContainer.appendChild(holidayButtons);

}

createHolidaysButton('Feriado')

//3 Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function changeHolidaysColor (){
  let holidayButton = document.querySelector('#btn-holiday');
  let feriados = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'orange';

  holidayButton.addEventListener('click', function() {
    for (let index = 0; index < feriados.length; index += 1) {
      if (feriados[index].style.backgroundColor === newColor) {
        feriados[index].style.backgroundColor = backgroundColor;
      } else {
        feriados[index].style.backgroundColor = newColor;
      }
    }
  })
}

changeHolidaysColor();

//4 Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

//Adicione a este botão o ID "btn-friday" .

//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createFridayButton (friday){
  const fridayButton = document.createElement('button');
  const buttonsContainer = document.querySelector('.buttons-container');
  fridayButton.id = 'btn-friday';
  fridayButton.innerHTML = friday;
  buttonsContainer.appendChild(fridayButton);
}

createFridayButton('Sexta-feira');

/*5 Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

function fridayChangeColor(fridays){
  let getFridayButton = document.querySelector('#btn-friday');
  let getFridays = document.querySelectorAll('.friday');
  let fridayText = 'Sextou!!';
      
  getFridayButton.addEventListener('click', function(){

    for(let index = 0; index < getFridays.length; index += 1){
      if(getFridays[index].innerHTML !== fridayText){
        getFridays[index].innerHTML = fridayText;
      } else{
        getFridays[index].innerHTML = fridays[index];
      }
    }

  })
}

let dezFridays = [4,11,18,25];
fridayChangeColor(dezFridays);

//6 Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function zoomDays () {
  const getDays = document.querySelector('#days');
  const zoom = '30px';

  getDays.addEventListener('mouseover', function (){
    if(getDays.style.font.size === '20px'){
      getDays.style.font.size = zoom;
    }else {
      getDays.style.font.size = '20px';
    }
  })
  
}

zoomDays();