

gsap.from(".presentation h3", {
    transform: "translateX(150%) translateY(-600%) rotate(24deg)",
    scrollTrigger: {
        trigger: ".presentation",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 3,
        pin: true,
        pinSpacing: true
    }
})

gsap.to(".services__slide h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: ".services__slide",
        scroller: "body",
        markers: true,
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
        markers: true,
        start: "top 0%",
        end: "top -250%",
        scrub: 3,
        pin: true,
        pinSpacing: true
    }
})