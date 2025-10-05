document.addEventListener('DOMContentLoaded', () => {
const images = document.querySelectorAll('.slider img');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let current = 0;

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

left.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
});

right.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
});
});