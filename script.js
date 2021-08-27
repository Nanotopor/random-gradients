const button = document.querySelector('.button');

button.addEventListener('click', () => {
    button.style.background = `radial-gradient(${randomColor()}, ${randomColor()})`;
    document.querySelector('.home').style.background = `radial-gradient(${randomColor()}, ${randomColor()})`;
    document.querySelector('.obod').style.background = `linear-gradient(${randomColor()}, ${randomColor()})`;
});

const randomColor = () => `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;

const randomNumber = (max) => {
    return Math.round(Math.random() * (max - 1));
};