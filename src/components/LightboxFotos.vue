<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  fotos: { type: Array, required: true },
  indiceAtual: { type: Number, required: true },
})

const emit = defineEmits(['fechar', 'anterior', 'proxima'])

function aoTeclar(e) {
  if (e.key === 'Escape') emit('fechar')
  if (e.key === 'ArrowLeft') emit('anterior')
  if (e.key === 'ArrowRight') emit('proxima')
}

onMounted(() => window.addEventListener('keydown', aoTeclar))
onUnmounted(() => window.removeEventListener('keydown', aoTeclar))
</script>

<template>
  <div class="lightbox" @click.self="emit('fechar')">
    <button class="lightbox__fechar" @click="emit('fechar')" aria-label="Fechar">✕</button>

    <button class="lightbox__seta lightbox__seta--esq" @click="emit('anterior')" aria-label="Foto anterior">‹</button>

    <Transition name="troca" mode="out-in">
      <img
        :key="fotos[indiceAtual].id"
        :src="fotos[indiceAtual].src"
        :alt="fotos[indiceAtual].frase || 'Foto'"
        class="lightbox__imagem"
      />
    </Transition>

    <button class="lightbox__seta lightbox__seta--dir" @click="emit('proxima')" aria-label="Próxima foto">›</button>
  </div>
</template>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(30, 20, 18, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox__imagem {
  max-width: 88vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.5);
}

.lightbox__fechar {
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  color: #fff;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 1.1rem;
}

.lightbox__seta {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.12);
  border: none;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.8rem;
  line-height: 1;
}

.lightbox__seta--esq {
  left: 20px;
}
.lightbox__seta--dir {
  right: 20px;
}

.troca-enter-active,
.troca-leave-active {
  transition: opacity 0.3s ease;
}
.troca-enter-from,
.troca-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .lightbox__seta {
    width: 40px;
    height: 40px;
    font-size: 1.4rem;
  }
}
</style>
