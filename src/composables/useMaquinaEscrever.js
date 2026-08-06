import { ref } from 'vue'

export function useMaquinaEscrever() {
  const textoExibido = ref('')
  const terminou = ref(false)
  let intervalo = null

  function iniciar(textoCompleto, velocidadeMs = 28) {
    textoExibido.value = ''
    terminou.value = false
    let indice = 0

    if (intervalo) clearInterval(intervalo)

    intervalo = setInterval(() => {
      textoExibido.value += textoCompleto.charAt(indice)
      indice++
      if (indice >= textoCompleto.length) {
        clearInterval(intervalo)
        terminou.value = true
      }
    }, velocidadeMs)
  }

  function parar() {
    if (intervalo) clearInterval(intervalo)
  }

  return { textoExibido, terminou, iniciar, parar }
}
