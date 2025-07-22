document.getElementById('reserveBtn').addEventListener('click', function() {
  alert('Para reservar uma mesa, ligue para (11) 98765-4321 ou envie mensagem pelo WhatsApp!');
});

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  index = (index === 0) ? images.length - 1 : index - 1;
  showSlide();
});

nextBtn.addEventListener('click', () => {
  index = (index === images.length - 1) ? 0 : index + 1;
  showSlide();
});

// Slide automático (opcional)
setInterval(() => {
  nextBtn.click();
}, 5000);

