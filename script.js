document.addEventListener('DOMContentLoaded', () => {
    // =============================================
    // 1. MOBILE MENU TOGGLE
    // =============================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navLinks.classList.toggle('active');
            mobileMenuBtn.textContent = isOpen ? '✕' : '☰';
        });
    }

    // =============================================
    // 2. MOBILE DROPDOWN TOGGLE (click, not hover)
    // =============================================
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('button');
        if (btn) {
            btn.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    // Close other open dropdowns
                    dropdowns.forEach(d => {
                        if (d !== dropdown) d.classList.remove('active');
                    });
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Close mobile menu when clicking a link inside it
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
                dropdowns.forEach(d => d.classList.remove('active'));
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && navLinks?.classList.contains('active')) {
            if (!e.target.closest('header')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
                dropdowns.forEach(d => d.classList.remove('active'));
            }
        }
    });

    // =============================================
    // 3. ACTIVE LINK HIGHLIGHT
    // =============================================
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // =============================================
    // 4. SCROLL-REVEAL ANIMATIONS (IntersectionObserver)
    // =============================================
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target); // animate once
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback: show all immediately
        revealElements.forEach(el => {
            el.classList.add('revealed');
        });
    }

    // =============================================
    // 5. MOBILE CAROUSEL FIX — smaller translateZ
    // =============================================
    function fixCarouselForMobile() {
        const items = document.querySelectorAll('.carousel-item');
        if (items.length === 0) return;

        const isMobile = window.innerWidth <= 768;
        const tz = isMobile ? 180 : 350;
        const count = items.length;

        items.forEach((item, i) => {
            const angle = (360 / count) * i;
            item.style.transform = `rotateY(${angle}deg) translateZ(${tz}px)`;
        });
    }

    fixCarouselForMobile();
    window.addEventListener('resize', fixCarouselForMobile);
});
