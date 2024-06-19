
document.addEventListener('DOMContentLoaded', function() {

const form = document.querySelector('form');
const successMessage = document.querySelector('.success_text');
const confettiContainer = document.getElementById('confetti-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Clear the form fields
        form.reset();
    successMessage.classList.add('show');
    clearFormFields();
        showConfetti();
        // Optionally, hide the success message after a few seconds
        setTimeout(function() {
            successMessage.classList.remove('show');
        }, 5000);
    });
    function clearFormFields() {
        form.reset();
    }   

    function showConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confetti.style.backgroundColor = getRandomColor();
            confettiContainer.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 3000); // adjust this timeout to match the animation duration
        }
    }

    function getRandomColor() {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
