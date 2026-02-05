document.addEventListener('DOMContentLoaded', () => {
    // Inicializa Animações
    AOS.init({
        duration: 1000,
        once: true
    });

    const btn = document.getElementById('surpriseBtn');
    const msg = document.getElementById('finalMessage');

    btn.addEventListener('click', () => {
        // Confetti Burst
        const count = 200;
        const defaults = {
            origin: { y: 0.7 },
            colors: ['#ff4d6d', '#c9184a', '#ffb3c1']
        };

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });

        // Interface Changes
        btn.style.opacity = '0';
        setTimeout(() => {
            btn.style.display = 'none';
            msg.style.display = 'block';
        }, 300);
    });
});