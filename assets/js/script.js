const btnShow = document.querySelector('.btn-menu');
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.lista-links');

btnShow.addEventListener('click', () => {
    hamburguer.classList.toggle('ativado');
    menu.classList.toggle('ativado');
})