<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visivel = ref(false)

function verificarScroll() {
  visivel.value = window.scrollY > 500
}

function irParaTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', verificarScroll))
onUnmounted(() => window.removeEventListener('scroll', verificarScroll))
</script>

<template>
  <Transition name="fade">
    <button v-if="visivel" class="botao-topo" @click="irParaTopo" aria-label="Voltar ao topo">
      ↑
    </button>
  </Transition>
</template>

<style scoped>
.botao-topo {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, var(--cor-primaria), var(--cor-dourado));
  color: #fff;
  font-size: 1.3rem;
  box-shadow: 0 8px 20px -6px var(--cor-sombra);
  z-index: 90;
  transition: transform var(--transicao);
}

.botao-topo:hover {
  transform: translateY(-4px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
