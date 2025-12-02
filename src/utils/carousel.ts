/**
 * Inicializa la funcionalidad de un carrusel individual
 */
function initSingleCarousel(mes: number) {
    const track = document.querySelector(`[data-carousel-track="${mes}"]`) as HTMLElement;
    const prevBtn = document.querySelector(`[data-carousel-prev="${mes}"]`) as HTMLElement;
    const nextBtn = document.querySelector(`[data-carousel-next="${mes}"]`) as HTMLElement;

    if (!track || !prevBtn || !nextBtn) {
        return;
    }

    let currentIndex = 0;
    const cards = track.querySelectorAll(".producto-card");
    const totalCards = cards.length;

    /**
     * Calcula cuántas tarjetas mostrar según el ancho de pantalla
     */
    const getCardsToShow = (): number => {
        const width = window.innerWidth;
        if (width < 768) return 1;
        if (width < 1024) return 2;
        return 3;
    };

    let cardsToShow = getCardsToShow();
    let maxIndex = Math.max(0, totalCards - cardsToShow);

    /**
     * Actualiza la posición del carrusel y el estado de los botones
     */
    const updateCarousel = () => {
        // Si hay pocas tarjetas, deshabilitar el carrusel y ocultar botones
        if (totalCards <= cardsToShow) {
            track.style.transform = 'translateX(0)';
            track.style.justifyContent = 'center';
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            return;
        }

        // Mostrar botones si hay más tarjetas que las visibles
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        track.style.justifyContent = 'flex-start';

        const cardWidth = (cards[0] as HTMLElement)?.offsetWidth || 0;
        const gap = 32; // 2rem gap
        const offset = -(currentIndex * (cardWidth + gap));
        track.style.transform = `translateX(${offset}px)`;

        // Actualizar estado de botones
        prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";
        prevBtn.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
        nextBtn.style.opacity = currentIndex >= maxIndex ? "0.5" : "1";
        nextBtn.style.pointerEvents = currentIndex >= maxIndex ? "none" : "auto";
    };

    // Event listeners para botones de navegación
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Actualizar al cambiar tamaño de ventana
    const resizeHandler = () => {
        cardsToShow = getCardsToShow();
        maxIndex = Math.max(0, totalCards - cardsToShow);
        currentIndex = Math.min(currentIndex, maxIndex);
        updateCarousel();
    };

    window.addEventListener("resize", resizeHandler);

    // Inicializar
    updateCarousel();
}

/**
 * Inicializa todos los carruseles de productos (uno por mes)
 */
export function initCarousel() {
    // Encontrar todos los carruseles
    const tracks = document.querySelectorAll("[data-carousel-track]");

    tracks.forEach((track) => {
        const mes = parseInt(track.getAttribute("data-carousel-track") || "1");
        initSingleCarousel(mes);
    });
}

/**
 * Inicializa los tabs de meses
 */
export function initMesTabs() {
    const tabs = document.querySelectorAll(".mes-tab");
    const contents = document.querySelectorAll(".mes-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const mes = tab.getAttribute("data-mes");

            // Remover active de todos los tabs y contenidos
            tabs.forEach((t) => t.classList.remove("active"));
            contents.forEach((c) => c.classList.remove("active"));

            // Activar el tab y contenido seleccionado
            tab.classList.add("active");
            const content = document.querySelector(`[data-mes-content="${mes}"]`);
            if (content) {
                content.classList.add("active");
            }
        });
    });
}

/**
 * Inicializa los botones de suscripción
 */
export function initSuscripcionButtons() {
    const suscripcionBtns = document.querySelectorAll(".btn-suscribirse");

    suscripcionBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const plan = btn.getAttribute("data-plan");

            let mensaje = "";
            if (plan === "6-meses") {
                mensaje = "Plan de 6 meses seleccionado ($400.000). Redirigiendo a métodos de pago...";
            } else if (plan === "anual") {
                mensaje = "Plan Anual seleccionado ($700.000). Redirigiendo a métodos de pago...";
            }

            alert(mensaje);

            // Descomentar para redirigir a la página de pagos:
            // window.location.href = '/SyntaxPro/pagos';
        });
    });
}

/**
 * Inicializa todos los componentes de la página de suscripción
 */
export function initServicioSuscripcion() {
    initMesTabs();
    initCarousel();
    initSuscripcionButtons();
}
