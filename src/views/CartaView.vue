<script setup>
import { ref, nextTick } from 'vue'
import { useMaquinaEscrever } from '../composables/useMaquinaEscrever.js'

const envelopeAberto = ref(false)
const { textoExibido, terminou, iniciar } = useMaquinaEscrever()

const textoCarta = `Querida mãe,

Feliz aniversário, minha rainha que eu amo. Eu queria dizer que sinto 
muito orgulho da mulher que você é e do exemplo que você nos dá todos
os dias, por mostrar que sempre podemos contar contigo para tudo, que 
podemos confiar em você (agora pelo menos ksks). Obrigado por ser a 
minha melhor amiga que eu poderia ter, por ser esse exemplo de mulher, 
que, mesmo sendo mãe solo agora, você consegue me orgulhar cada dia mais. 
Eu te amo mil milhões, meu amor.
,`

async function abrirEnvelope() {
  envelopeAberto.value = true
  await nextTick()
  setTimeout(() => iniciar(textoCarta, 22), 700)
}
</script>

<template>
  <section class="pagina container carta-pagina">
    <h2 class="titulo-secao" v-reveal>Uma Carta Para Você</h2>

    <div v-if="!envelopeAberto" class="envelope-container" v-reveal>
      <button class="envelope" @click="abrirEnvelope" aria-label="Abrir carta">
        <div class="envelope__tampa"></div>
        <div class="envelope__corpo">
          <span class="envelope__selo">❤️</span>
        </div>
      </button>
      <p class="envelope__dica">Toque no envelope para abrir</p>
    </div>

    <Transition name="folha">
      <div v-if="envelopeAberto" class="folha">
        <p class="folha__texto" style="white-space: pre-line">{{ textoExibido }}</p>
        <Transition name="fade">
          <p v-if="terminou" class="folha__assinatura">Com amor, o seu querido bebezinho ❤️</p>
        </Transition>
      </div>
    </Transition>

  </section>
</template>

<style scoped>
.carta-pagina {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.envelope-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
}

.envelope {
  position: relative;
  width: 220px;
  height: 150px;
  background: linear-gradient(135deg, #f6e3d3, #eccdb0);
  border: none;
  border-radius: 8px;
  box-shadow: 0 20px 40px -18px var(--cor-sombra);
  transition: transform var(--transicao);
}

.envelope:hover {
  transform: translateY(-6px) scale(1.02);
}

.envelope__tampa {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 110px solid transparent;
  border-right: 110px solid transparent;
  border-top: 80px solid #e8b9a0;
  border-radius: 8px 8px 0 0;
}

.envelope__corpo {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 16px;
}

.envelope__selo {
  font-size: 1.6rem;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15));
}

.envelope__dica {
  color: var(--cor-texto-suave);
  font-size: 0.9rem;
}

.folha {
  max-width: 640px;
  width: 100%;
  background: var(--cor-branco);
  border-radius: var(--raio-grande);
  padding: clamp(28px, 5vw, 56px);
  margin-top: 30px;
  box-shadow: 0 25px 60px -24px var(--cor-sombra);
  position: relative;
  border: 1px solid rgba(203, 161, 90, 0.2);
}

.folha::before,
.folha::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid var(--cor-primaria-clara);
  opacity: 0.6;
}
.folha::before {
  top: 14px;
  left: 14px;
  border-right: none;
  border-bottom: none;
}
.folha::after {
  bottom: 14px;
  right: 14px;
  border-left: none;
  border-top: none;
}

.folha__texto {
  font-family: var(--fonte-titulo);
  font-size: 1.1rem;
  line-height: 1.9;
  color: var(--cor-texto);
  min-height: 280px;
}

.folha__assinatura {
  text-align: right;
  font-family: var(--fonte-titulo);
  font-style: italic;
  color: var(--cor-primaria);
  font-size: 1.15rem;
  margin-top: 20px;
}

.folha-enter-active {
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.folha-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.97);
}

.fade-enter-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from {
  opacity: 0;
}
</style>
