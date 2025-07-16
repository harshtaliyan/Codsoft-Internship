
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // This part of the original code hides the navbar, which is not present
        // in the current HTML structure. I will comment it out.
        // navbar.style.transform = 'translateY(-100%)';
    } else {
         // This part of the original code shows the navbar, which is not present
        // in the current HTML structure. I will comment it out.
        // navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

// Testimonial slider - This feature is not present in the HTML, commenting it out
/*
const testimonials = [
    {
        text: "The AI/ML training program completely transformed my career. I'm now working as a Data Scientist at a top tech company.",
        name: "Sarah Johnson",
        role: "Data Scientist"
    },
    {
        text: "Excellent curriculum and hands-on projects. The instructors are highly knowledgeable and supportive.",
        name: "Michael Chen",
        role: "ML Engineer"
    },
    {
        text: "The practical approach to learning AI concepts helped me understand complex topics easily.",
        name: "Emily Rodriguez",
        role: "AI Developer"
    }
];

let currentTestimonial = 0;
const testimonialContainer = document.querySelector('.testimonial');

function updateTestimonial() {
    const { text, name, role } = testimonials[currentTestimonial];
    testimonialContainer.innerHTML = `
        <p>${text}</p>
        <h4>${name}</h4>
        <span>${role}</span>
    `;
}

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonialContainer.style.opacity = 0;
    setTimeout(() => {
        updateTestimonial();
        testimonialContainer.style.opacity = 1;
    }, 500);
}, 5000);
*/

// Form submission handling - Assuming the form has an ID 'contactForm' based on the JS,
// but there is no form with this ID in the provided HTML.
// If you add a form with ID 'contactForm', uncomment this code.
/*
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    const submitButton = contactForm.querySelector('button');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;
    }, 1500);
});
*/

// Intersection Observer for animations - The HTML uses 'fade-in' and 'visible' classes
// for animations, not 'animate', 'course-card', or 'feature-card' for observation.
// I will comment out this section as it doesn't match the current HTML structure.
/*
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.course-card, .feature-card');
animatedElements.forEach(element => observer.observe(element));
*/

// Add animation classes to elements - This part also seems to be for a different animation
// approach than used in the current HTML ('fade-in'). Commenting it out.
/*
document.querySelectorAll('.course-card, .feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});
*/

// Helper function to check if element is in viewport - This function and the subsequent
// scroll listener seem to be part of a different animation implementation than
// the 'fade-in' class used in the HTML. Commenting it out.
/*
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animate elements when they come into view
function animateOnScroll() {
    document.querySelectorAll('.course-card, .feature-card').forEach(card => {
        if (isInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial check for elements in viewport
animateOnScroll();
*/

// The following script is already present in the HTML and should be used instead.
// It handles the mobile menu toggle, back-to-top button, smooth scrolling for anchor links,
// and the fade-in scroll animation.
/*
// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animation
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Trigger animations on load
document.addEventListener('DOMContentLoaded', () => {
    fadeInOnScroll();
});
*/