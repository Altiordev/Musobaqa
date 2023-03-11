const button = document.querySelectorAll('.port__button');

    
button[1].addEventListener('click', () => {
    button[1].classList.toggle('gradients');
    button[0].classList.remove('gradients');
    button[2].classList.remove('gradients');
    button[3].classList.remove('gradients');
    button[4].classList.remove('gradients');
    button[5].classList.remove('gradients');
})
button[2].addEventListener('click', () => {
    button[2].classList.toggle('gradients');
    button[1].classList.remove('gradients');
    button[0].classList.remove('gradients');
    button[3].classList.remove('gradients');
    button[4].classList.remove('gradients');
    button[5].classList.remove('gradients');
})
button[3].addEventListener('click', () => {
    button[3].classList.toggle('gradients');
    button[1].classList.remove('gradients');
    button[2].classList.remove('gradients');
    button[0].classList.remove('gradients');
    button[4].classList.remove('gradients');
    button[5].classList.remove('gradients');
})
button[4].addEventListener('click', () => {
    button[4].classList.toggle('gradients');
    button[1].classList.remove('gradients');
    button[2].classList.remove('gradients');
    button[3].classList.remove('gradients');
    button[0].classList.remove('gradients');
    button[5].classList.remove('gradients');
})
button[5].addEventListener('click', () => {
    button[5].classList.toggle('gradients');
    button[1].classList.remove('gradients');
    button[2].classList.remove('gradients');
    button[3].classList.remove('gradients');
    button[4].classList.remove('gradients');
    button[0].classList.remove('gradients');
})