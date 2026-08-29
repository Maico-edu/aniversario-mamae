<script setup>
import { ref } from 'vue'

const revelado = ref(false)
const confetes = ref([])
const fotoSurpresa = '../public/fotos/fotodamamae.jpeg'

const coresConfete = ['#c9748a', '#cba15a', '#e7b6c3', '#f4d9b0', '#a85c72']

function gerarConfetes() {
  confetes.value = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    esquerda: Math.random() * 100,
    atraso: Math.random() * 1.2,
    duracao: 2.5 + Math.random() * 2,
    cor: coresConfete[Math.floor(Math.random() * coresConfete.length)],
    rotacao: Math.random() * 360,
  }))
}

function revelarSurpresa() {
  gerarConfetes()
  revelado.value = true
}
</script>

<template>
  <section class="pagina container surpresa-pagina">
    <div v-if="!revelado" class="surpresa-inicial" v-reveal>
      <p class="surpresa-inicial__texto">Preparamos algo especial para você...</p>
      <button class="botao-surpresa" @click="revelarSurpresa">
        Não clique antes da hora ❤️
      </button>
    </div>

    <div v-else class="surpresa-revelada">
      <div class="confetes" aria-hidden="true">
        <span
          v-for="c in confetes"
          :key="c.id"
          class="confete"
          :style="{
            left: c.esquerda + '%',
            background: c.cor,
            animationDelay: c.atraso + 's',
            animationDuration: c.duracao + 's',
            transform: `rotate(${c.rotacao}deg)`,
          }"
        ></span>
      </div>

      <Transition appear name="pop">
        <div class="surpresa-conteudo">
          <h2 class="surpresa-conteudo__titulo">Feliz Aniversário! 🎉❤️</h2>
          <p class="surpresa-conteudo__texto">
            Que esse novo ciclo seja repleto de saúde, alegria e muito amor —
            exatamente como você sempre espalhou para todos nós.
          </p>
          <div class="surpresa-conteudo__foto-wrapper">
            <img :src="fotoSurpresa" alt="Foto especial" class="surpresa-conteudo__foto" />
          </div>
          <p class="surpresa-conteudo__assinatura">Com todo amor, sua família ❤️</p>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.surpresa-pagina {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 70vh;
}

.surpresa-inicial {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.surpresa-inicial__texto {
  color: var(--cor-texto-suave);
  font-size: 1.05rem;
}

.botao-surpresa {
  padding: 18px 40px;
  border: none;
  border-radius: 50px;
  background: linear-gradient(135deg, var(--cor-primaria), var(--cor-dourado));
  color: #fff;
  font-size: 1.1rem;
  box-shadow: 0 16px 34px -14px var(--cor-sombra);
  animation: pulsar-botao 2s ease-in-out infinite;
}

@keyframes pulsar-botao {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.surpresa-revelada {
  position: relative;
  width: 100%;
}

.confetes {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 50;
}

.confete {
  position: absolute;
  top: -20px;
  width: 10px;
  height: 16px;
  animation-name: cair-confete;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}

@keyframes cair-confete {
  to {
    top: 110vh;
    transform: translateY(0) rotate(720deg);
  }
}

.surpresa-conteudo {
  max-width: 560px;
  margin: 0 auto;
}

.surpresa-conteudo__titulo {
  font-size: clamp(2rem, 5vw, 2.8rem);
  color: var(--cor-primaria);
}

.surpresa-conteudo__texto {
  color: var(--cor-texto-suave);
  font-size: 1.05rem;
}

.surpresa-conteudo__foto-wrapper {
  width: 220px;
  height: 220px;
  margin: 24px auto;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid var(--cor-primaria-clara);
  box-shadow: 0 20px 44px -18px var(--cor-sombra);
}

.surpresa-conteudo__foto {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.surpresa-conteudo__assinatura {
  font-family: var(--fonte-titulo);
  font-style: italic;
  color: var(--cor-dourado);
}

.pop-enter-active {
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.pop-enter-from {
  opacity: 0;
  transform: scale(0.85) translateY(20px);
}
</style>
