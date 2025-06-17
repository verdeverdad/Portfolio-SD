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