const body = document.querySelector('body');
const btnMenuAdd = document.querySelector('.forTabletMenuBtn');
const btnMenuRemove = document.querySelector('.forTabletMenuBtnRemove');
const Menu = document.querySelector('.forTabletMenu');
// const cobe = document.getElementById('cobe');

btnMenuAdd.addEventListener('click', () => {
    Menu.classList.toggle('active')
    btnMenuAdd.classList.toggle('active')
    body.classList.toggle('lock')
})

btnMenuRemove.addEventListener('click', () => {
    Menu.classList.toggle('active')
    btnMenuAdd.classList.toggle('active')
    body.classList.toggle('lock')
})