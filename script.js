document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-container').forEach(section => {
        observer.observe(section);
    });

    // 2. RSVP Form Handling
    const rsvpForm = document.getElementById('rsvp-form');
    const rsvpMessage = document.getElementById('rsvp-message');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(rsvpForm);
            const data = Object.fromEntries(formData.entries());

            // Simulate API Call (e.g., to Vercel Serverless Function)
            console.log('Sending RSVP data:', data);
            
            // UI Update
            rsvpForm.classList.add('hidden');
            rsvpMessage.classList.remove('hidden');
            
            // In a real scenario, you could use fetch:
            /*
            try {
                const response = await fetch('/api/rsvp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    rsvpForm.classList.add('hidden');
                    rsvpMessage.classList.remove('hidden');
                }
            } catch (error) {
                alert('Erro ao enviar confirmação. Tente novamente.');
            }
            */
        });
    }

    // 3. Smooth Scroll Enhancement (for browsers that don't support CSS scroll-behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 4. Pix Copy Functionality
function copyPix() {
    const pixKey = "123.456.789-00"; // Should match the HTML
    navigator.clipboard.writeText(pixKey).then(() => {
        const btn = event.target;
        const originalText = btn.innerText;
        btn.innerText = "Copiado! ✅";
        btn.style.backgroundColor = "#27ae60";
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "";
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar Pix:', err);
    });
}
