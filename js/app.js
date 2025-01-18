gsap.from(".page1 h3", {
    transform: "translateX(150%) translateY(-600%) rotate(24deg)",
    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 3,
        pin: true,
        pinSpacing: true
    }
})

gsap.to(".page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
        pinSpacing: true
    }
})