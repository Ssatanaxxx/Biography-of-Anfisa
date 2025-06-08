// Interactive sections
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.anatomy-section');
    const views = document.querySelectorAll('.view');
    let currentView = 0;

    sections.forEach((section, index) => {
        section.addEventListener('click', () => {
            views.forEach(view => view.classList.remove('active'));
            views[index].classList.add('active');
            currentView = index;
        });
    });

    // Navigation
    const prevButtons = document.querySelectorAll('.button--prev');
    const nextButtons = document.querySelectorAll('.button--next');
    const closeButtons = document.querySelectorAll('.button--close');

    function navigateViews(direction) {
        views[currentView].classList.remove('active');

        if (direction === 'prev') {
            currentView = (currentView - 1 + views.length) % views.length;
        } else {
            currentView = (currentView + 1) % views.length;
        }

        views[currentView].classList.add('active');
    }

    prevButtons.forEach(button => {
        button.addEventListener('click', () => navigateViews('prev'));
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', () => navigateViews('next'));
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            views[currentView].classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Protocol cards animation
    const protocolCards = document.querySelectorAll('.protocol-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    protocolCards.forEach(card => {
        observer.observe(card);
    });

    // Interactive cat avatar
    const catAvatar = document.getElementById('catAvatar');
    if (catAvatar) {
        catAvatar.addEventListener('click', function () {
            const meows = [
                'sounds/meow1.mp3',
                'sounds/meow2.mp3',
                'sounds/meow3.mp3',
                'sounds/meow4.mp3',
                'sounds/meow5.mp3',
                'sounds/meow6.mp3',
            ];

            const randomMeow = meows[Math.floor(Math.random() * meows.length)];
            const sound = new Audio(randomMeow);

            // Click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);

            sound.play();

            // Heart effect
            const heart = document.createElement('div');
            heart.innerHTML = '😻';
            heart.style.position = 'absolute';
            heart.style.fontSize = '30px';
            heart.style.left = `${this.offsetLeft + this.offsetWidth / 2 - 15}px`;
            heart.style.top = `${this.offsetTop - 10}px`;
            heart.style.opacity = '1';
            heart.style.transition = 'all 1s ease';
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.style.opacity = '0';
                heart.style.top = `${this.offsetTop - 100}px`;
                setTimeout(() => heart.remove(), 1000);
            }, 100);
        });
    }

    // Laser pointer effect
    const laserCursor = document.getElementById('laser-cursor');
    if (laserCursor) {
        document.addEventListener('mousemove', (e) => {
            laserCursor.style.left = `${e.clientX}px`;
            laserCursor.style.top = `${e.clientY}px`;
        });
    }
});