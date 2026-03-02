/// ====================
// TODO CUANDO CARGA EL DOM
// ====================
document.addEventListener("DOMContentLoaded", () => {
  
  // abrir y cerrar el menu hamburguesa

  const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Opcional: Animación simple para convertir las barras en una 'X'
    menuToggle.classList.toggle('is-active');
});

// Cerrar el menú automáticamente al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
  
// 1. LISTA COMPLETA DE ESPECIALISTAS
const especialistas = [
    {
        nombre: "Dra. Luisa Benítez",
        especialidad: "Psicóloga Social",
        foto: "medios/psicologa1.jpeg",
        whatsapp: "573116670167"
    },
    {
        nombre: "Dr. Jhon Murillo",
        especialidad: "Psicólogo Clínico",
        foto: "medios/psicologo2.jpeg",
        whatsapp: "573027448717"
    },
    {
        nombre: "Dr. Camilo Cruz",
        especialidad: "Psicólogo Jurídico",
        foto: "medios/psicologo3.jpeg",
        whatsapp: "573116670167"
    }
];

const contenedor = document.getElementById("lista-especialistas");

// 2. CREAR LAS TARJETAS DINÁMICAMENTE
if (contenedor) {
    contenedor.innerHTML = ""; 

    especialistas.forEach(esp => {
        const card = document.createElement("div");
        card.className = "card"; 
        
        // Creamos el mensaje personalizado aquí mismo
        const mensaje = `Hola ${esp.nombre}, me gustaría agendar una cita con usted.`;
        // Lo codificamos para que WhatsApp lo lea bien
        const mensajeWA = encodeURIComponent(mensaje);

        card.innerHTML = `
            <img src="${esp.foto}" alt="${esp.nombre}" class="img-especialista">
            <h3>${esp.nombre}</h3>
            <p>${esp.especialidad}</p>
            <a href="https://wa.me/${esp.whatsapp}?text=${mensajeWA}" 
               class="btn-whatsapp" 
               target="_blank">
               Contactar WhatsApp
            </a>
        `;
        contenedor.appendChild(card);
    });
}

  // 3. ANIMACIÓN DE ENTRADA (Se ejecuta DESPUÉS de crear las tarjetas)
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, i * 150);
  });

  // --- Resto de tus animaciones (Slider y Fade) ---
  const slider = document.querySelector(".hero-slider");
  const heroSlides = document.querySelectorAll(".slide");
  let currentIndex = 0;
  if (slider && heroSlides.length > 0) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % heroSlides.length;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 5000);
  }

  const fadeSlides = document.querySelectorAll(".carousel-fade img");
  let fadeIndex = 0;
  if (fadeSlides.length > 0) {
    setInterval(() => {
      fadeSlides[fadeIndex].classList.remove("active");
      fadeIndex = (fadeIndex + 1) % fadeSlides.length;
      fadeSlides[fadeIndex].classList.add("active");
    }, 4000);
  }
});

// ANIMACIÓN AL HACER SCROLL
const secciones = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });
secciones.forEach((sec) => observer.observe(sec));

const botonesContactar = document.querySelectorAll('.contactar-btn');

    botonesContactar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const especialista = e.target.parentElement.querySelector('h3').innerText;
            alert(`¡Gracias por tu interés! Pronto te redirigiremos a la agenda de: ${especialista}`);
        });
    });
