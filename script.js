document.addEventListener('DOMContentLoaded', () => {
    const toggleModeBtn = document.getElementById('toggleMode');
    const body = document.body;

    toggleModeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});
