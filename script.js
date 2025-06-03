
// === 1. Halo lumineux qui suit la souris ===
const light = document.querySelector('.light');

document.addEventListener('mousemove', (e) => {
  light.style.left = `${e.clientX}px`;
  light.style.top = `${e.clientY}px`;
});


// === 2. Toggle du mode sombre ===
const darkToggleBtn = document.getElementById('darkModeToggle');

if (darkToggleBtn) {
  darkToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}


// === 3. Rotation compétences circulaires avec éclat lumineux ===
const circleContainer = document.getElementById('circleContainer');
const circleItems = document.querySelectorAll('.circle-item');
const flashEffect = document.getElementById('flashEffect');

circleItems.forEach(item => {
  item.addEventListener('click', () => {
    circleContainer.classList.add('rotate');
    flashEffect.classList.add('active');

    setTimeout(() => {
      circleContainer.classList.remove('rotate');
      flashEffect.classList.remove('active');
    }, 1000);
  });
});


// === 4. Texte changeant dans la carte "Quiz" ===
const quizText = document.getElementById("quizLoader");
const quizMessages = [
  "Chargement du quiz...",
  "Préparation des questions...",
  "Connexion au serveur...",
  "Presque prêt !"
];
let quizIndex = 0;

if (quizText) {
  setInterval(() => {
    quizText.textContent = quizMessages[quizIndex];
    quizIndex = (quizIndex + 1) % quizMessages.length;
  }, 1500);
}


// === 5. Bulles d’animation d’arrière-plan ===
const bubbleContainer = document.getElementById("bubbles");

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.animationDuration = (Math.random() * 3 + 3) + "s";
  bubble.style.width = bubble.style.height = (Math.random() * 10 + 5) + "px";
  bubbleContainer.appendChild(bubble);

  setTimeout(() => bubble.remove(), 6000);
}

if (bubbleContainer) {
  setInterval(createBubble, 300);
}




// Horloge
function updateClock() {
  const now = new Date();
  const heures = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const secondes = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${heures}:${minutes}:${secondes}`;
}
setInterval(updateClock, 1000);
updateClock();

// Mode sombre
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

