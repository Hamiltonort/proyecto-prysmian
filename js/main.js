document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todas las tarjetas
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            // Obtenemos la vista a la que debe redirigir
            const targetUrl = this.getAttribute("data-target");
            
            // Agregamos un efecto visual rápido antes de cambiar de página
            this.style.transform = "scale(0.95)";
            
            // Tiempo de espera súper corto para la animación (150ms)
            // Cumple con el requisito de transición menor a 1 segundo.
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 150);
        });
    });
});

// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DE TRANSICIÓN DEL MENÚ (Ya la tenías) ---
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", function() {
            const targetUrl = this.getAttribute("data-target");
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 150);
        });
    });

    // --- LÓGICA DEL REPRODUCTOR DE VIDEO ---
    const video = document.getElementById("main-video");
    const interactiveLayer = document.getElementById("interactive-layer");
    const btnTestInteraction = document.getElementById("btn-test-interaction");
    const btnResume = document.getElementById("btn-resume");

    // Verificar si estamos en una página con video
    if (video) {
        
        // Simular la aparición de un elemento interactivo
        btnTestInteraction.addEventListener("click", () => {
            // 1. Pausar el video automáticamente
            video.pause();
            
            // 2. Mostrar la capa de información interactiva
            interactiveLayer.classList.add("active");
        });

        // Botón de continuar reproduciendo
        btnResume.addEventListener("click", () => {
            // 1. Ocultar la capa
            interactiveLayer.classList.remove("active");
            
            // 2. Reanudar el video
            video.play();
        });
        
        // Opcional: Lógica futura para mostrar interacciones en marcas de tiempo específicas.
        // video.addEventListener("timeupdate", () => {
        //    if (video.currentTime >= 10.0 && video.currentTime <= 10.2) {
        //        video.pause();
        //        interactiveLayer.classList.add("active");
        //    }
        // });
    }
});