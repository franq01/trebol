// Selecciona el trébol
const trebol = document.querySelector('.trebol');

// Crea una nueva animación de GSAP para hacer girar el trébol
const animacion = gsap.to(trebol, { duration: 2, rotation: 360, repeat: -1, ease: "none" });
