const car = document.querySelector('.car');

function changeNeonColor() {
  const neonColors = ['#f00', '#0f0', '#00f', '#f0f', '#0ff', '#ff0'];
  const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
  car.style.filter = `drop-shadow(0 0 10px \${randomColor})`;
}

setInterval(changeNeonColor, 1000); // Cambia el color del neón cada 1 segundo
