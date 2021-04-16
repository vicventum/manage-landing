import lax from '../vendor/laxxx/lax.min'

window.onload = function () {
  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return window.scrollY
  })
  // Hero -------------------------------------------------------------------------
  lax.addElements('.hero__desc, .hero__img', {
    scrollY: {
      opacity: [
        ['elCenterY+200', 'elOutY'],
        [1, 0]
      ],
      translateY: [
        ['elCenterY+200', 'elOutY'],
        [0, -50]
      ],

    }
  })
  lax.addElements('.hero__desc', {
    scrollY: {
      translateX: [
        ['elCenterY+200', 'elOutY+00'],
        [0, -100]
      ],
      translateY: [
        ['elCenterY+200', 'elOutY+00'],
        [0, -50]
      ],
    }
  })
  lax.addElements('.hero__img', {
    scrollY: {
      translateX: [
        ['elCenterY+200', 'elOutY+00'],
        [0, 100]
      ],
      translateY: [
        ['elCenterY+200', 'elOutY+00'],
        [0, -50]
      ],

    }
  })
  // About ------------------------------------------------------------------------
  lax.addElements('.about__desc, .intelligent > div', {
    scrollY: {
      opacity: [
        ['elInY', 300],
        [0, 1]
      ]
    }
  })
  lax.addElements('.feature:nth-child(1), .feature:nth-child(2), .feature:nth-child(3)', {
    scrollY: {
      opacity: [
        ['elInY', 'elCenterY-200', 'elCenterY+200', 'elOutY'],
        [0, 1, 1, 0]
      ]
    }
  })
  lax.addElements('.intelligent div:first-child', {
    scrollY: {
      opacity: [
        ['elInY', 'elCenterY-200', 'elCenterY+200', 'elOutY'],
        [0, 1, 1, 0]
      ]
    }
  })

  lax.addElements('.about__desc, .intelligent div:first-child', {
    scrollY: {
      translateX: [
        ['elInY', 'elCenterY'],
        [-100, 0]
      ]
    }
  })
  lax.addElements('.feature, .intelligent div:last-child', {
    scrollY: {
      translateX: [
        ['elInY', 'elCenterY'],
        [100, 0]
      ]
    }
  })

  // carousel-item
  lax.addElements('.carousel', {
    scrollY: {
      translateY: [
        ['elInY', 'elCenterY-250'],
        ['100', 0]
      ],
      opacity: [
        ['elInY', 'elCenterY-250', 'elCenterY+250', 'elOutY'],
        [0, 1, 1, 0]
      ]
    }
  })
}