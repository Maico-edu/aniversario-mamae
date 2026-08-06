<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)
const visivel = ref(false)

function mover(e) {
  x.value = e.clientX
  y.value = e.clientY
  if (!visivel.value) visivel.value = true
}

onMounted(() => window.addEventListener('mousemove', mover))
onUnmounted(() => window.removeEventListener('mousemove', mover))
</script>

<template>
  <div
    v-if="visivel"
    class="cursor"
    :style="{ transform: `translate(${x}px, ${y}px)` }"
    aria-hidden="true"
  ></div>
</template>

<style scoped>
.cursor {
  position: fixed;
  top: -6px;
  left: -6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--cor-primaria);
  opacity: 0.55;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.08s linear;
  mix-blend-mode: multiply;
}

@media (pointer: coarse) {
  .cursor {
    display: none;
  }
}
</style>
