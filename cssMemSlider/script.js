let offset = 0;
const sliderLine = document.querySelector('.slider-track');
const dots = document.querySelectorAll('.dot-container');
const dot = document.querySelectorAll('.dot');
let slideCount = 1;
const mediaQuery = window.matchMedia('(max-width: 376px)');
let slideStep = 320;
if (mediaQuery.matches) {
    slideStep = 285;
}



dots.forEach(element => element.addEventListener('click', () => {
    let idNumber = Number(element.id.slice(4));
    if (idNumber === slideCount) {
        return;
    }
    if (idNumber < slideCount) {
        moveLeft(idNumber);
    }
    if (idNumber > slideCount) {
        moveRight(idNumber);
    }
    slideCount = idNumber;
    removeActive();
    element.lastElementChild.classList.add('active');
}));

dots.forEach(element => element.addEventListener('mouseover', () => {
    element.lastElementChild.classList.add('hover-active');
}));

dots.forEach(element => element.addEventListener('mouseout', () => {
    element.lastElementChild.classList.remove('hover-active');
}));

function moveLeft(value) {
    offset -= slideStep * (slideCount - value);
    sliderLine.style.left = -offset + 'px';

}

function moveRight(value) {
    offset += slideStep * (value - slideCount);;
    sliderLine.style.left = -offset + 'px';

}

function removeActive() {
    dots.forEach(element => element.lastElementChild.classList.remove('active'));
}

// dots.forEach(element => element.onmouseover = function() {
//     element.classList.add('active');
// })