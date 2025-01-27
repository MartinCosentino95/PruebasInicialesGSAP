   // Registrar ScrollTrigger
   gsap.registerPlugin(ScrollTrigger);

   // Animación para la sección 2
   gsap.to(".section-2", {
     scrollTrigger: {
       trigger: ".section-2",   // Elemento que activa la animación
       start: "top 90%",        // Inicia cuando la parte superior del trigger está al 80% del viewport
       end: "top 0%",          // Termina cuando la parte superior del trigger está al 20% del viewport
       toggleActions: "play reverse play reverse", // Reproduce y revierte al entrar/salir
       markers: true,           // Muestra marcas visuales para depuración (puedes desactivarlo después)
     },
     opacity: 1,                // Cambia la opacidad de 0 a 1
     scale: 1,                  // Escala el elemento de 0.8 a 1
     duration: 1                // Duración de la animación
   });