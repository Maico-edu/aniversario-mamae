<script setup>
import { ref } from 'vue'
import { memorias } from '../data/memorias.js'

const abertaId = ref(null)

function alternar(id) {
  abertaId.value = abertaId.value === id ? null : id
}
</script>

<template>
  <section class="pagina container">
    <h2 class="titulo-secao" v-reveal>Memórias</h2>
    <p class="subtitulo-secao" v-reveal>Arraste para o lado e clique em cada foto para reviver o momento.</p>

    <div class="memorias-linha">
      <div v-for="m in memorias" :key="m.id" class="memoria">
        <button class="memoria__foto-botao" @click="alternar(m.id)">
          <img :src="m.foto" :alt="m.titulo" class="memoria__foto" />
        </button>

        <Transition name="expandir">
          <div v-if="abertaId === m.id" class="memoria__detalhe">
            <h3>{{ m.titulo }}</h3>
            <p>{{ m.texto }}</p>
          </div>
        </Transition>

        <p v-if="abertaId !== m.id" class="memoria__titulo-curto">{{ m.titulo }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.memorias-linha {
  display: flex;
  gap: 22px;
  overflow-x: auto;
  padding: 20px 6px 30px;
  scroll-snap-type: x mandatory;
}

.memoria {
  flex: 0 0 240px;
  scroll-snap-align: start;
}

.memoria__foto-botao {
  width: 100%;
  height: 300px;
  padding: 0;
  border: none;
  border-radius: var(--raio);
  overflow: hidden;
  box-shadow: 0 16px 34px -18px var(--cor-sombra);
  cursor: pointer;
}

.memoria__foto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.memoria__foto-botao:hover .memoria__foto {
  transform: scale(1.06);
}

.memoria__titulo-curto {
  text-align: center;
  margin-top: 10px;
  font-size: 0.92rem;
  color: var(--cor-texto-suave);
}

.memoria__detalhe {
  background: var(--cor-branco);
  border-radius: var(--raio);
  padding: 16px;
  margin-top: 10px;
  box-shadow: 0 12px 26px -16px var(--cor-sombra);
}

.memoria__detalhe h3 {
  font-size: 1.05rem;
  margin-bottom: 6px;
}

.memoria__detalhe p {
  font-size: 0.88rem;
  color: var(--cor-texto-suave);
  margin: 0;
}

.expandir-enter-active,
.expandir-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.expandir-enter-from,
.expandir-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
