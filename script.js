// Optional: Customize carousel behavior
const heroCarousel = document.querySelector('#heroCarousel');

if (heroCarousel) {
  new bootstrap.Carousel(heroCarousel, {
    interval: 4000, // auto slide time (4s)
    pause: false,
    ride: 'carousel',
    wrap: true
  });
}
