const btnMenu = document.querySelector('.menu__botaoMenu');
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu__listaLinks');

// FUNCÃO PARA QUANDO MUDAR DE TELA O MENU FECHAR

// FUNCÃO ABRIR E FECHAR MENU
function menuShow(event) {

    // MENU
    menu.classList.toggle('ativado');

    // ÍCONE MENU
    hamburguer.classList.toggle('ativado');

    // ACESSIBILIDADE
    if (event.type == 'touchstart') event.preventDefault();

    const ativado = menu.classList.contains('ativado');

    if (ativado) {

        event.currentTarget.setAttribute('aria-label', 'botão fechar menu');

    } else {
        
        event.currentTarget.setAttribute('aria-label', 'botão abrir menu');

    }

    event.currentTarget.setAttribute('aria-expanded', ativado);

}

btnMenu.addEventListener('click', menuShow);
btnMenu.addEventListener('touchstart', menuShow);