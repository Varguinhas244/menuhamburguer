const menuHamburguer = document.querySelector('.me  nu-hamburguer');

const menu = document.querySelector('.menu');

menuHamburguer.addEventListener('click', () => {
    menu.classList.toggle('active');
});

