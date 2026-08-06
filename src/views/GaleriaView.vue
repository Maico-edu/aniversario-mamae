<script setup>
import { ref } from 'vue'
import { fotos } from '../data/fotos.js'
import LightboxFotos from '../components/LightboxFotos.vue'

const indiceAberto = ref(null)

function abrir(i) {
  indiceAberto.value = i
}
function fechar() {
  indiceAberto.value = null
}
function anterior() {
  indiceAberto.value = (indiceAberto.value - 1 + fotos.length) % fotos.length
}
function proxima() {
  indiceAberto.value = (indiceAberto.value + 1) % fotos.length
}
</script>

<template>
  <section class="pagina container">
    <h2 class="titulo-secao" v-reveal>Galeria</h2>
    <p class="subtitulo-secao" v-reveal>Um álbum de bons momentos nossos amor.</p>

    <div class="galeria">
      <button
        v-for="(foto, i) in fotos"
        :key="foto.id"
        class="galeria__item"
        v-reveal="{ delay: (i % 6) * 80 }"
        @click="abrir(i)"
      >
        <img :src="foto.src" :alt="foto.frase || 'Foto da família'" class="galeria__imagem" />
        <span v-if="foto.frase" class="galeria__frase">{{ foto.frase }}</span>
      </button>
    </div>

    <LightboxFotos
      v-if="indiceAberto !== null"
      :fotos="fotos"
      :indice-atual="indiceAberto"
      @fechar="fechar"
      @anterior="anterior"
      @proxima="proxima"
    />
  </section>
</template>

<style scoped>
.galeria {
  columns: 3 260px;
  column-gap: 18px;
}

.galeria__item {
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 18px;
  break-inside: avoid;
  border: none;
  padding: 0;
  border-radius: var(--raio);
  overflow: hidden;
  box-shadow: 0 14px 34px -16px var(--cor-sombra);
  cursor: pointer;
  background: none;
}

.galeria__imagem {
  width: 100%;
  display: block;
  transition: transform 0.6s ease;
}

.galeria__item:hover .galeria__imagem {
  transform: scale(1.08);
}

.galeria__frase {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px 16px 14px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), transparent);
  color: #fff;
  font-family: var(--fonte-titulo);
  font-style: italic;
  font-size: 0.95rem;
  text-align: left;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity var(--transicao), transform var(--transicao);
}

.galeria__item:hover .galeria__frase {
  opacity: 1;
  transform: translateY(0);
}
</style>
