const slides = document.querySelectorAll(".slide");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
});

// Avtomatik slayd (xohlasang olib tashlashing mumkin)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 8000);

// Boshlang'ich
showSlide(currentSlide);
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Boshqa ochilganlarni yopish
    faqItems.forEach(f => {
      if (f !== item) f.classList.remove("active");
    });

    // Bosilgan itemni toggle qilish
    item.classList.toggle("active");
  });
});
