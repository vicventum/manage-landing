M.AutoInit()

// Carousel
const carousel = document.getElementById('carousel')
M.Carousel.init(carousel, {
  indicators: true,
  height: 300
})

// Slider
const slider = document.getElementById('slider')
M.Slider.init(slider, {
  indicators: true,
  height: 150,
  transition: 500,
  interval: 6000
})
