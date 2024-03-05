let startX = 0;
let currentX = 0;
let isDragging = false;
let indiceSlideAtual = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function mostrarSlide(indice) {
    slider.style.transform = `translateX(${-indice * 100}%)`;
}

function moverSlide(direcao) {
    indiceSlideAtual += direcao;
    if (indiceSlideAtual < 0) {
        indiceSlideAtual = totalSlides - 1;
    } else if (indiceSlideAtual >= totalSlides) {
        indiceSlideAtual = 0;
    }
    mostrarSlide(indiceSlideAtual);
}

function iniciarSliderAutomatico() {
    setInterval(() => {
        moverSlide(1);
    }, 3000);
}

iniciarSliderAutomatico();

slider.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
});

slider.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const moveX = e.clientX;
        currentX = moveX - startX;
    }
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
    if (currentX < -50) {
        moverSlide(1);
    } else if (currentX > 50) {
        moverSlide(-1);
    }
    currentX = 0;
});

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

slider.addEventListener('touchmove', (e) => {
    if (isDragging) {
        const moveX = e.touches[0].clientX;
        currentX = moveX - startX;
    }
});

slider.addEventListener('touchend', () => {
    isDragging = false;
    if (currentX < -50) {
        moverSlide(1);
    } else if (currentX > 50) {
        moverSlide(-1);
    }
    currentX = 0;
});


