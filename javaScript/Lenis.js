import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
  direction: 'vertical',
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)