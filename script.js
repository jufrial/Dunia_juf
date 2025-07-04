const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bgImage = new Image();
let jufImg = new Image();
let shiraImg = new Image();
let scene = "taman";

bgImage.src = "img/background_taman.jpg";
jufImg.src = "img/juf.png";
shiraImg.src = "img/shira.png";

const juf = { x: 100, y: 150, size: 50 };
const shira = { x: 250, y: 150, size: 50 };
let keys = {};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(shiraImg, shira.x, shira.y, shira.size, shira.size);
  ctx.drawImage(jufImg, juf.x, juf.y, juf.size, juf.size);
  requestAnimationFrame(draw);
}

function move() {
  if (keys["ArrowLeft"]) juf.x -= 2;
  if (keys["ArrowRight"]) juf.x += 2;
  if (keys["ArrowUp"]) juf.y -= 2;
  if (keys["ArrowDown"]) juf.y += 2;
  setTimeout(move, 20);
}

function scan() {
  document.getElementById("bgmusic").play();
  const dx = Math.abs(juf.x - shira.x);
  const dy = Math.abs(juf.y - shira.y);
  if (dx < 30 && dy < 30) {
    alert("Shira menatapmu... Hangat.");
  } else {
    alert("Masih ada jarak, tapi kamu merasa tenang.");
  }
}

function changeScene() {
  scene = scene === "taman" ? "kamar" : "taman";
  bgImage.src = scene === "taman" ? "img/background_taman.jpg" : "img/background_kamar.jpg";
}

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

draw(); move();