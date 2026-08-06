<script setup>
const quantidade = 18
const particulas = Array.from({ length: quantidade }, (_, i) => ({
  id: i,
  esquerda: Math.random() * 100,
  atraso: Math.random() * 10,
  duracao: 12 + Math.random() * 10,
  tamanho: 4 + Math.random() * 8,
}))
</script>

<template>
  <div class="particulas" aria-hidden="true">
    <span
      v-for="p in particulas"
      :key="p.id"
      class="particula"
      :style="{
        left: p.esquerda + '%',
        animationDelay: p.atraso + 's',
        animationDuration: p.duracao + 's',
        width: p.tamanho + 'px',
        height: p.tamanho + 'px',
      }"
    ></span>
  </div>
</template>

<style scoped>
.particulas {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.particula {
  position: absolute;
  bottom: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--cor-dourado), transparent 70%);
  opacity: 0.5;
  animation-name: subir;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
}

@keyframes subir {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.55;
  }
  100% {
    transform: translateY(-110vh) translateX(20px);
    opacity: 0;
  }
}
</style>
