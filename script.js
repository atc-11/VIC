document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation on scroll
    const sections = document.querySelectorAll('section, .glass');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(section);
    });

    // Parallax effect for hero image
    const heroImage = document.querySelector('.profile-frame');
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        if (heroImage) {
            heroImage.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
        }
    });

    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(10, 10, 12, 0.8)';
            nav.style.padding = '10px 40px';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.05)';
            nav.style.padding = '15px 40px';
        }
    });
});
