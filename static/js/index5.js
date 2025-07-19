const cards = document.querySelectorAll('.slider-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const counter = document.getElementById('counter');

let currentIndex = 0;

function showCard(index) {
  cards.forEach(card => card.classList.remove('active'));
  cards[index].classList.add('active');
  counter.textContent = `${index + 1} / ${cards.length}`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
});

// start with first card
showCard(currentIndex);
