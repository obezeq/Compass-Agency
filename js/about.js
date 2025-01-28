
const parts = document.querySelectorAll(".about__intro--subtitle .part");

gsap.set(parts, {
  opacity: 0,
  filter: "blur(33px)"
});

gsap.timeline({
  defaults: {
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.69,
  },
  scrollTrigger: {
    trigger: ".about__section",
    scroller: "body",
    start: "top 0%",
    end: "top -369%",
    scrub: 2,
    pin: true,
    pinSpacing: true
  }
})
.fromTo(parts, 
  { opacity: 0, filter: "blur(10px)" },
  { opacity: 1, filter: "blur(0px)" }
);
