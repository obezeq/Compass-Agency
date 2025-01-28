// Get all the nav links and the hidden checkbox
const navLinks = document.querySelectorAll('.header__nav-link');
const navToggle = document.getElementById('nav-toggle');

// Add a click event listener to each nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Uncheck the checkbox to close the menu
    navToggle.checked = false;
  });
});

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

var servicesAnimations = gsap.timeline({
    scrollTrigger: {
        trigger: ".home__services--title",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 2
    }
})

/* servicesAnimations.from(".service__1", {
    x: -100
}) */


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
