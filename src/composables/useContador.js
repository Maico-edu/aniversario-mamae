import { ref, onMounted } from 'vue'

export function useContador(valorFinal, duracaoMs = 1800) {
  const valorAtual = ref(0)

  onMounted(() => {
    const inicio = performance.now()

    function passo(agora) {
      const progresso = Math.min((agora - inicio) / duracaoMs, 1)
      const progressoSuave = 1 - (1 - progresso) * (1 - progresso)
      valorAtual.value = Math.floor(progressoSuave * valorFinal)

      if (progresso < 1) {
        requestAnimationFrame(passo)
      } else {
        valorAtual.value = valorFinal
      }
    }

    requestAnimationFrame(passo)
  })

  return { valorAtual }
}

export function calcularIdade(dataNascimento) {
  const nascimento = new Date(dataNascimento)
  const hoje = new Date()
  let idade = hoje.getFullYear() - nascimento.getFullYear()
  const aindaNaoFezAniversarioEsteAno =
    hoje.getMonth() < nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())
  if (aindaNaoFezAniversarioEsteAno) idade--
  return idade
}
