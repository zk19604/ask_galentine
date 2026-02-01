// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});

// Array of images with specific positions
const imagePositions = [
  { src: './img1.jpg', top: '10%', left: '15%', rotation: -15, size: 120 },
  { src: './img2.jpg', top: '15%', left: '75%', rotation: 12, size: 140 },
  { src: './img3.jpg', top: '65%', left: '10%', rotation: -8, size: 110 },
  { src: './img4.jpg', top: '70%', left: '80%', rotation: 20, size: 130 },
  { src: './img5.jpg', top: '40%', left: '5%', rotation: -12, size: 115 }
];

// Function to create floating images at specific positions
function createFloatingImages() {
  imagePositions.forEach(position => {
    // Create wrapper for tape effect
    const wrapper = document.createElement('div');
    wrapper.className = 'pic-wrapper';
    
    const img = document.createElement('img');
    img.src = position.src;
    img.className = 'floating-pic';
    
    // Set specific position
    wrapper.style.position = 'fixed';
    wrapper.style.top = position.top;
    wrapper.style.left = position.left;
    wrapper.style.transform = `rotate(${position.rotation}deg)`;
    wrapper.style.zIndex = '1';
    wrapper.style.pointerEvents = 'none'; // So they don't interfere with clicks
    
    // Set specific size
    img.style.width = position.size + 'px';
    img.style.height = position.size + 'px';
    
    wrapper.appendChild(img);
    document.body.appendChild(wrapper);
  });
}

// Create the floating images
createFloatingImages();