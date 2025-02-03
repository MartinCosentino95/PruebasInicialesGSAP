// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animación para la sección 2
gsap.to(".section-2", {
  scrollTrigger: {
    trigger: ".section-2",   // Elemento que activa la animación
    start: "top 60%",        // Inicia cuando la parte superior del trigger está al 60% del viewport
     end: "top -15%",          // Termina cuando la parte superior del trigger está al 50% del viewport
    toggleActions: "play reverse play reverse", // Reproduce y revierte al entrar/salir
    markers: true,           // Muestra marcas visuales para depuración (puedes desactivarlo después)
    //  scrub: true,
  },
  opacity: 1,                // Cambia la opacidad de 0 a 1
  scale: 1,                  // Escala el elemento de 0.8 a 1
  duration: 1.5                // Duración de la animación
});

//  
gsap.to(".section-3 h1", {
  x: "-150vw",  // Mueve el texto una cantidad más controlada
  scrollTrigger: {
    trigger: ".section-3",
    scroller: "body",
    start: "top 0%",
    end: "top -120%", // Reduce el área de scroll
    scrub: 2,
    markers: true,
    pin:true,
  }


})