document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('demo');

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // Iniciar el carrusel
                $('#myCarousel').carousel('cycle');
                observer.unobserve(entry.target); // Dejar de observar una vez que el carrusel ha comenzado
            }
        });
    }, { threshold: 0.1 });

    observer.observe(carousel);
});

  document.addEventListener('DOMContentLoaded', () => {
            const alerta = document.getElementById('alerta-fugaz');
            const contenido = document.getElementById('contenido-principal');
            const duracionAlerta = 2500; // La alerta dura 4 segundos

            const opciones = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            const callback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // 1. Muestra la alerta
                        alerta.classList.add('mostrar');

                        // 2. Espera el tiempo de la alerta, la oculta y muestra el contenido principal
                        setTimeout(() => {
                            alerta.classList.remove('mostrar'); // Inicia el desvanecimiento de la alerta
                            if (contenido) {
                                contenido.style.display = 'block'; // Muestra el contenido
                                alerta.style.display = 'none';
                            }
                        }, duracionAlerta);

                        // Dejamos de observar la alerta para que no se active de nuevo
                        observer.unobserve(alerta);
                    }
                });
            };

            const observer = new IntersectionObserver(callback, opciones);
            observer.observe(alerta);
        });