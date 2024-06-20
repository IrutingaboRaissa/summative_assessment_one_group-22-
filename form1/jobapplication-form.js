const form = document.querySelector('form');
const successMessage = document.querySelector('.success_text');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.classList.add('show');
    setTimeout(() => form.submit(), 20000);
} );