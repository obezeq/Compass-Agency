'use strict'


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

// Galería interactiva
document.getElementById('addMember').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
          const newMember = document.createElement('div');
          newMember.className = 'team__container';
          newMember.innerHTML = `
              <button class="delete-member">×</button>
              <img src="${e.target.result}" class="team__avatar">
              <input type="text" placeholder="Name" class="team__name">
              <input type="text" placeholder="Position" class="team__position">
          `;
          document.getElementById('teamGallery').appendChild(newMember);
      }
      reader.readAsDataURL(file);
  }
});

document.querySelector('.add-member').addEventListener('click', () => 
document.getElementById('addMember').click());