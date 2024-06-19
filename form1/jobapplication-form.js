
document.addEventListener('DOMContentLoaded', function() {

const form = document.querySelector('form');
const successMessage = document.querySelector('.success_text');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Clear the form fields
        form.reset();
    successMessage.classList.add('show');
        // Optionally, hide the success message after a few seconds
        setTimeout(function() {
            successMessage.classList.remove('show');
        }, 5000);
    });
});
