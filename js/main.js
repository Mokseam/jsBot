'use strict'
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
let randomNumber = getRandomInt(1, 100);
console.log(randomNumber);
toFindNumber();

function askQuestion () {
    let result = confirm("Вы ввели неверное значение. Хотите продолжить или выйти?");
    if (result == true) {
        toFindNumber();
    }
    else if (result == false) {
        alert("Игра закончена");
    }
}

function toFindNumber() {
    let number = +prompt("Угадай число от 1 до 100");
    if (number < 1 || number > 100) {
        askQuestion();
    }
    else if (number > randomNumber){
        alert("Загаданное число меньше");
        askQuestion();
    } 
    else if (number < randomNumber) {
        alert("Загаданное число больше");
        askQuestion();
    } 
    else if (number == randomNumber) {
        confirm("Поздравляю, Вы угадали!");
    }
    else if (parseInt) {
        askQuestion();
    }

};

