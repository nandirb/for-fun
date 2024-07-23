const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ballRadius = 10;

let x = canvas.width / 2;
let y = canvas.height / 2;

let dx = 2;
let dy = -2;

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "lightblue";
  ctx.fill();
  ctx.closePath();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}

setInterval(draw, 10);
