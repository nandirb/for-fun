function drawTriangle(x, y) {
  const canvas = document.getElementById("triangle");
  const context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + 100, y + 50);
  context.lineTo(x, y + 100);
  context.fill();
}

drawTriangle(10, 10);
