<script setup>
import { ref, onMounted } from 'vue'

const carregando = ref(true)

onMounted(() => {
  setTimeout(() => {
    carregando.value = false
  }, 1400)
})
</script>

<template>
  <Transition name="loader">
    <div v-if="carregando" class="loader">
      <div class="loader__coracao">❤️</div>
      <p class="loader__texto">Preparando algo especial...</p>
    </div>
  </Transition>
</template>

<style scoped>
.loader {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: var(--cor-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.loader__coracao {
  font-size: 3rem;
  animation: pulsar 1.1s ease-in-out infinite;
}

.loader__texto {
  font-family: var(--fonte-titulo);
  color: var(--cor-primaria);
  font-size: 1.1rem;
  letter-spacing: 0.3px;
}

@keyframes pulsar {
  0%, 100% { transform: scale(1); opacity: 0.85; }
  50% { transform: scale(1.15); opacity: 1; }
}

.loader-leave-active {
  transition: opacity 0.6s ease;
}
.loader-leave-to {
  opacity: 0;
}
</style>
