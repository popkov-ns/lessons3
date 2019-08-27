'use strict';

// Вывод дней недели на русском или английском
let lang = prompt('Введите ru или en');

// Через if
if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
    console.log('Вы ввели неверное значение');
}

// Через switch-case
switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
    default:
        console.log('Вы ввели неверное значение');
}

// Через многомерный массив
let arr = ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];
let ru = 0,
    en = 1;

console.log(arr[1]);