function createFirework() {
    const fireworksContainer = document.getElementById('fireworks');
    const firework = document.createElement('div');

    firework.classList.add('firework');
    firework.style.left = Math.random() * 100 + 'vw';

    fireworksContainer.appendChild(firework);

    setTimeout(() => {
        fireworksContainer.removeChild(firework);
    }, 2000); // 2000ms is the duration of the firework-animation
}