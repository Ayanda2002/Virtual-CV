document.addEventListener('DOMContentLoaded', () => {
    const toggleModeBtn = document.getElementById('toggleMode');
    const body = document.body;

    toggleModeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    const progressCircles = document.querySelectorAll('.circular-progress');
    progressCircles.forEach(circle => {
        const skillLevel = circle.getAttribute('data-skill');
        const offset = 314 - (314 * skillLevel / 100);

        circle.querySelector('.progress-circle').style.strokeDashoffset = offset;
    });

});
