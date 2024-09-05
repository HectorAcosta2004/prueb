const inputFps = document.getElementById('in_fps');
const fpsText = document.getElementById('fpsText');
const canvas = document.getElementById('spriteCanvas');
const ctx = canvas.getContext('2d');

const spritSheet = new Image();
spritSheet.src = 'assets/mage.png';

let fps = 10;
let frameDuration = 1000/fps;
let lastFrameTime = 0;

let currentFrame = 0;
const totalFrame = 3;

const spriteHeight = 32;
const spriteWidth = 32;
const scale = 3;

inputFps.onchange = event => {
  fps = event.currentTarget.value;
  frameDuration = 1000/fps;
  fpsText.innerHTML = `${fps}fps`;
}

const update = time => {
  if(time - lastFrameTime > frameDuration){
    currentFrame = (currentFrame + 1) % totalFrame;
    lastFrameTime = time;
  }

  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  const frameX = currentFrame * spriteWidth;

  ctx.drawImage(spritSheet, frameX, 0, spriteWidth,
    spriteHeight, 100, 100, spriteWidth * scale, spriteHeight * scale);

  requestAnimationFrame(update);
};

spritSheet.onload = () => requestAnimationFrame(update);