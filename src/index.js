import { initPageLoad } from './initPageLoad';
import { menuTab } from './menu.js';
import { contactTab } from './contact.js';
initPageLoad();

const contentDiv = getElementById('content');

document.getElementById('home').addEventListener('click', () => {
    contentDiv.innerHTML = '';
    initPageLoad();
})

document.getElementById('menu').addEventListener('click', () => {
    contentDiv.innerHTML = '';
    menuTab();
})

document.getElementById('contact').addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contactTab();
})
