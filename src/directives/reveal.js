
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visivel')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 }
)

export const vReveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    const delay = binding.value?.delay || 0
    if (delay) {
      el.style.transitionDelay = `${delay}ms`
    }
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
