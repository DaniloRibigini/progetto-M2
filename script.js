const checkbox = document.getElementById('promise');
const button = document.querySelector('.procedi');

checkbox.addEventListener('change', function () {
    button.disabled = !checkbox.checked;
});

button.addEventListener('click', function () {
    window.location.href = 'questions.html';
});
