const lightsContainer = document.getElementById('lights');
const colors = ['red', 'yellow', 'blue', 'white', 'orange', 'green'];

function createLight() {
  const light = document.createElement('div');
  light.classList.add('light');
  light.style.left = Math.random() * 100 + '%';
  light.style.top = Math.random() * 100 + '%';
  light.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  lightsContainer.appendChild(light);

  setTimeout(() => {
    light.remove();
  }, 2000);
}

setInterval(createLight, 300);

// Background Music
const music = document.getElementById('music');
//const playButton = document.getElementById('play-music');

// Background Music
//const music = document.getElementById('music');

// Play Music Button
const playButton = document.getElementById('play-music');
playButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playButton.textContent = 'Pause Music';
  } else {
    music.pause();
    playButton.textContent = 'Play Music';
  }
});

// Snowfall Animation
const snowContainer = document.getElementById('snow');
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Falling speed
  snowflake.style.opacity = Math.random();
  snowflake.style.width = snowflake.style.height = Math.random() * 8 + 2 + 'px';
  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}
setInterval(createSnowflake, 100);

// Garland Lights Animation (Optional)
const garlandColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];
const layers = document.querySelectorAll('.layer');
function animateGarlands() {
  layers.forEach((layer, index) => {
    const garland = document.createElement('div');
    garland.classList.add('garland');
    garland.style.backgroundColor = garlandColors[index % garlandColors.length];
    garland.style.animation = `blink ${2 + index}s infinite alternate`;

    layer.appendChild(garland);
  });
}

// Add blinking lights
animateGarlands();

// Blinking Animation for Garlands
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;
document.head.appendChild(styleSheet);
