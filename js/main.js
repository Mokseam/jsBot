'use strict'
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let randomNumber = getRandomInt(1, 100);
console.log(randomNumber);
toFindNumber();

function toFindNumber() {
    let number = +prompt("Угадай число от 1 до 100");
    console.log('Введено число ' + number);
    if (number > randomNumber) {
        alert("Загаданное число меньше");
        toFindNumber();
    } 
    else if (number < randomNumber && number != 0) {
        alert("Загаданное число больше");
        toFindNumber();
    } 
    else if (number == randomNumber) {
        alert("Поздравляю, Вы угадали!");
    }
    else if (number == 0) {
         alert("Игра окончена");
    }
};

