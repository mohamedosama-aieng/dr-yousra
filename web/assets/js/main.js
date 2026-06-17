/* =============================================
   Double Your Income - Landing Page Scripts
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {

    // ========== COUNTDOWN TIMER ==========
    function startCountdown() {
        // Set countdown to 8 hours from page load (or load from localStorage)
        let endTime = localStorage.getItem('dyi_countdown_end');
        if (!endTime) {
            endTime = Date.now() + (8 * 60 * 60 * 1000); // 8 hours
            localStorage.setItem('dyi_countdown_end', endTime);
        } else {
            endTime = parseInt(endTime);
            // Reset if expired
            if (Date.now() >= endTime) {
                endTime = Date.now() + (8 * 60 * 60 * 1000);
                localStorage.setItem('dyi_countdown_end', endTime);
            }
        }

        function updateCountdown() {
            const now = Date.now();
            const diff = Math.max(0, endTime - now);

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            const cdHours = document.getElementById('cd-hours');
            const cdMinutes = document.getElementById('cd-minutes');
            const cdSeconds = document.getElementById('cd-seconds');

            if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
            if (cdMinutes) cdMinutes.textContent = String(minutes).padStart(2, '0');
            if (cdSeconds) cdSeconds.textContent = String(seconds).padStart(2, '0');

            if (diff <= 0) {
                // Reset countdown
                endTime = Date.now() + (8 * 60 * 60 * 1000);
                localStorage.setItem('dyi_countdown_end', endTime);
            }
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    startCountdown();

    // ========== FAQ ACCORDION ==========
    window.toggleFaq = function(element) {
        const faqItem = element.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQs
        document.querySelectorAll('.faq-item.active').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle clicked FAQ
        if (!isActive) {
            faqItem.classList.add('active');
        }
    };

    // ========== MODULE ACCORDION ==========
    window.toggleModule = function(element) {
        const moduleItem = element.parentElement;
        moduleItem.classList.toggle('active');
    };

    // ========== HEADER SCROLL EFFECT ==========
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight + 20;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== INTERSECTION OBSERVER FOR FADE-IN ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards for scroll animation
    document.querySelectorAll('.pain-card, .learn-card, .bonus-card, .testimonial-card, .pricing-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // ========== PLAY BUTTON CLICK ==========
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            // In a real implementation, this would open a video modal
            alert('سيتم تشغيل الفيديو التعريفي للكورس');
        });
    }

    // ========== CTA BUTTON TRACKING ==========
    document.querySelectorAll('.btn-gold, .btn-outline-gold').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const btnText = this.textContent.trim();
            console.log('CTA Clicked:', btnText);
            // In production: send to analytics
        });
    });

});
