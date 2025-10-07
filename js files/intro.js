const container = document.getElementById('footsteps-container');
const textContainer = document.getElementById('intro-text');  // target div for text

// ✅ HIDE HEADER initially
document.querySelector("header").style.display = "none";

const rightSrc = '../images/right-footprint.png';
const leftSrc = '../images/left-footprint.png';

const totalPairs = 3;
const totalImages = totalPairs * 2;
let count = 0;

const texts = ["Learning", "Building", "Evolving"];

const intervalId = setInterval(() => {
  if (count >= totalImages) {
    clearInterval(intervalId);
    return;
  }

  // Create foot image
  const footImg = document.createElement('img');
  footImg.src = count % 2 === 0 ? rightSrc : leftSrc;
  footImg.alt = count % 2 === 0 ? 'Right Foot' : 'Left Foot';
  footImg.className = count % 2 === 0 ? 'right-foot-img' : 'left-foot-img';

  container.appendChild(footImg);
  count++;

  // After every 2 images, add a <p> to the intro-text div
  if (count % 2 === 0) {
    const pairIndex = count / 2 - 1;
    const p = document.createElement('p');
    p.textContent = texts[pairIndex];
    textContainer.appendChild(p);
  }
}, 350);


setTimeout(() => {
    const intro = document.getElementById("intro");
    const portfolio = document.getElementById("portfolio");
    const header = document.querySelector("header");

    // Add fade-out animation
    intro.classList.add("fade-out");

    // After fade-out, hide intro & show portfolio
    setTimeout(() => {
        intro.style.display = "none";
        header.style.display = "flex"; 

        portfolio.style.display = "block";
    }, 800); // matches the CSS transition time
}, 3000); // wait before fading (adjust this time)

