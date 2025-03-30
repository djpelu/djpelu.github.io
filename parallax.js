document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Quanto hai scrollato (in pixel)
    const parallaxBg = document.querySelector('.parallax_bg');
    const speed = 0.3; // velocità dell'effetto (0.5 = metà della velocità di scroll)
  
    parallaxBg.style.transform = `translateY(${scrollPosition * speed}px)`;
  });