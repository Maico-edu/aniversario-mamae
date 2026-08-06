<script setup>
import { motivos } from '../data/motivos.js'

function aoMoverMouse(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centroX = rect.width / 2
  const centroY = rect.height / 2
  const rotX = ((y - centroY) / centroY) * -8
  const rotY = ((x - centroX) / centroX) * 8
  card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`
}

function aoSairMouse(e) {
  e.currentTarget.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateY(0)'
}
</script>

<template>
  <section class="pagina container">
    <h2 class="titulo-secao" v-reveal>Motivos Pelos Quais Te Amamos (nao sao poucos ksks)</h2>
    <p class="subtitulo-secao" v-reveal>São tantos, que escolhemos só alguns para caber aqui.</p>

    <div class="grade">
      <div
        v-for="(m, i) in motivos"
        :key="m.id"
        class="cartao-motivo"
        v-reveal="{ delay: (i % 6) * 80 }"
        @mousemove="aoMoverMouse"
        @mouseleave="aoSairMouse"
      >
        <span class="cartao-motivo__icone">{{ m.icone }}</span>
        <h3 class="cartao-motivo__titulo">{{ m.titulo }}</h3>
        <p class="cartao-motivo__texto">{{ m.texto }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grade {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 24px;
}

.cartao-motivo {
  background: var(--cor-branco);
  border-radius: var(--raio);
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 16px 34px -18px var(--cor-sombra);
  transition: transform 0.15s ease-out, box-shadow 0.3s ease;
  will-change: transform;
}

.cartao-motivo:hover {
  box-shadow: 0 24px 44px -18px rgba(201, 116, 138, 0.35);
}

.cartao-motivo__icone {
  font-size: 2.4rem;
  display: block;
  margin-bottom: 14px;
}

.cartao-motivo__titulo {
  font-size: 1.15rem;
  margin-bottom: 8px;
}

.cartao-motivo__texto {
  color: var(--cor-texto-suave);
  font-size: 0.92rem;
  margin: 0;
}
</style>
