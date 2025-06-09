// Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // FAQ functionality
    initFAQ();
    
    // Buy now button
    initPurchase();
    
    // Header scroll effect
    initHeaderScroll();
});

// FAQ Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = question.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.querySelector('.faq-question').classList.remove('active');
                otherItem.querySelector('.faq-answer').classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

// Purchase functionality
function initPurchase() {
    const buyButton = document.getElementById('buy-now');
    
    if (buyButton) {
        buyButton.addEventListener('click', async function() {
            try {
                // Show loading state
                const originalText = this.textContent;
                this.textContent = 'Redirection...';
                this.disabled = true;
                
                // Create Stripe checkout session
                const response = await fetch('/.netlify/functions/create-checkout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        priceId: 'price_1RYA1AANRwaqPj2NTx2XYcAv',
                        successUrl: `${window.location.origin}/success`,
                        cancelUrl: `${window.location.origin}#package`
                    })
                });
                
                const { url } = await response.json();
                
                if (url) {
                    window.location.href = url;
                } else {
                    throw new Error('Erreur lors de la création de la session de paiement');
                }
                
            } catch (error) {
                console.error('Erreur:', error);
                alert('Une erreur est survenue. Veuillez réessayer ou nous contacter.');
                
                // Reset button
                this.textContent = originalText;
                this.disabled = false;
            }
        });
    }
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'white';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Analytics helper functions
function trackEvent(eventName, parameters = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Also track in our custom analytics if needed
    console.log('Event tracked:', eventName, parameters);
}

// Conversion tracking
function trackConversion(type, value = null) {
    const eventData = {
        event_category: 'conversion',
        event_label: type
    };
    
    if (value) {
        eventData.value = value;
    }
    
    trackEvent('conversion', eventData);
}

// Export functions for use in other scripts
window.trackEvent = trackEvent;
window.trackConversion = trackConversion;