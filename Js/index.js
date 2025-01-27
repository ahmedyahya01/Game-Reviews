import { Home } from './home.module.js';
import { Details } from './details.module.js';
import { Ui } from './ui.module.js';

const homeSection = new Home();
const detailsSection = new Details();
const ui = new Ui();

// Change Mood
let lightMood = document.querySelector('.light-mood');
let darkMood = document.querySelector('.dark-mood');
let body = document.querySelector('body')

lightMood.addEventListener('click', function () {
    darkMood.classList.remove('d-none')
    lightMood.classList.add('d-none')
    body.setAttribute('data-theme', 'white')
})
darkMood.addEventListener('click', function () {
    darkMood.classList.add('d-none')
    lightMood.classList.remove('d-none')
    body.setAttribute('data-theme', 'dark')
})