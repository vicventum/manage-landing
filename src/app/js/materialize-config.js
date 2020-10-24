// M.AutoInit()
const sidenav = document.querySelector('.sidenav')
M.Sidenav.init(sidenav)

// Carousel
const carousel = document.getElementById('carousel')
M.Carousel.init(carousel, {
  indicators: true,
  height: 300
})

// Slider
// const slider = document.getElementById('slider')
// M.Slider.init(slider, {
//   indicators: true,
//   height: 150,
//   transition: 500,
//   interval: 6000
// })

// Scrollspy
const sections = document.querySelectorAll('.scrollspy')
console.log(sections);
M.ScrollSpy.init(sections, {
  scrollOffset: 100
})
const about = document.getElementById('about')
M.ScrollSpy.init(about, {
  scrollOffset: 0,
})