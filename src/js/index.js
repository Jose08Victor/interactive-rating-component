const option = document.querySelectorAll('.option');
const button = document.getElementById('submit-btn');
const span = document.querySelector('span');

option.forEach((item, index) => {
    item.addEventListener('click', () => {
        removeActiveClassOfAllElements();

        span.innerHTML = index + 1;
        item.classList.add('active');
    });
});

button.addEventListener('click', () => {
    if (span.innerHTML !== '') {
        const fade = document.querySelector('.thank-you-state');
        fade.classList.remove('fade');
        fade.previousElementSibling.classList.add('fade');
    };
});

function removeActiveClassOfAllElements() {
    option.forEach((item) => {
        item.classList.remove('active');
    });
};
