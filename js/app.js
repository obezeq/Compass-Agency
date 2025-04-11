'use strict'

/*
───────────────────────────
       BURGER MENU
───────────────────────────
*/

const burgerMenu = () => {
    const navLinks = document.querySelectorAll('.header__nav-link');
    const navToggle = document.getElementById('nav-toggle');

    navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.checked = false;
    });
    });
}

/* 
───────────────────────────
     GSAP ANIMATIONS 
───────────────────────────
*/

gsap.registerPlugin(ScrollTrigger);

const gsapAnimations = () => {

    gsap.from(".presentation h3", {
        transform: "translateX(224%) translateY(-600%) rotate(24deg)",
        visibility: "none",
        scrollTrigger: {
            trigger: ".presentation",
            scroller: "body",
            start: "top 0%",
            end: "top -150%",
            scrub: 3,
            pin: true,
            pinSpacing: true
        }
    })

    let servicesAnimations = gsap.timeline({
        scrollTrigger: {
            trigger: ".home__services--title",
            scroller: "body",
            start: "top 50%",
            end: "top 0%",
            scrub: 2
        }
    })

    gsap.to(".services__slide h1", {
        transform: "translateX(-150%)",
        scrollTrigger: {
            trigger: ".services__slide",
            scroller: "body",
            start: "top 0%",
            end: "top -150%",
            scrub: 2,
            pin: true,
            pinSpacing: true
        }
    })

    gsap.from(".quality", {
        transform: "translateY(-150%)",
        scrollTrigger: {
            trigger: ".qualityoverquantity",
            scroller: "body",
            start: "top 0%",
            end: "top -250%",
            scrub: 3,
            pin: true,
            pinSpacing: true
        }
    })

    gsap.from(".whataretheysaying__title", {
        fontSize: "0rem",
        scrollTrigger: {
            trigger: ".home__whataretheysaying",
            scroller: "body",
            start: "top 0%",
            end: "top -300%",
            scrub: 1,
            pin: true,
            pinSpacing: true
        }
    })

}

/*
───────────────────────────
    SERVICES CONTROLLERS
───────────────────────────
*/

const toggleInterest = (serviceId) => {
    let interests = JSON.parse(localStorage.getItem('selectedServices') || '[]');
    const index = interests.indexOf(serviceId);
    
    if (index === -1) {
        interests.push(serviceId);
    } else {
        interests.splice(index, 1);
    }
    
    localStorage.setItem('selectedServices', JSON.stringify(interests));
    return interests;
};

const getSavedServices = () => {
    try {
        return JSON.parse(localStorage.getItem('selectedServices')) || [];
    } catch (error) {
        return [];
    }
};

const initializeInterestSystem = () => {
    const interestBtns = document.querySelectorAll('.interested__button');

    const refreshButtons = () => {
        const savedServices = getSavedServices();
    
        interestBtns.forEach(btn => {
            const { service: serviceId } = btn.dataset;
            const isInterested = savedServices.includes(serviceId);
            
            btn.textContent = isInterested ? 'Interested' : 'I\'m interested';
            btn.classList.toggle('interested__button--active', isInterested);
            
            const checkmark = btn.previousElementSibling;
            if (checkmark && checkmark.classList.contains('interested__check')) {
                checkmark.classList.toggle('fa-solid', isInterested);
                checkmark.classList.toggle('fa-regular', !isInterested);
            }
        });
    };

    refreshButtons();

    window.addEventListener('storage', (e) => {
        if (e.key === 'selectedServices') {
            refreshButtons();
        }
    });

    interestBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const serviceId = btn.dataset.service;
            const currentServices = getSavedServices();
            
            const newServices = currentServices.includes(serviceId)
                ? currentServices.filter(id => id !== serviceId)
                : [...currentServices, serviceId];

            localStorage.setItem('selectedServices', JSON.stringify(newServices));
            refreshButtons();
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    burgerMenu();
    gsapAnimations();
    initializeInterestSystem();
})