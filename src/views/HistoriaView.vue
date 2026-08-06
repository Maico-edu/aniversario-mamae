<script setup>
import { historia } from '../data/historia.js'
</script>

<template>
  <section class="pagina container">
    <h2 class="titulo-secao" v-reveal>Nossa Histórias de bagunças juntos</h2>
    <p class="subtitulo-secao" v-reveal>
      Cada momento que vivemos fez parte de uma história escrita com muito amor, 
      carinho e lembranças que vão ficar para sempre.
    </p>

    <div class="timeline">
      <div class="timeline__linha" aria-hidden="true"></div>

      <div
        v-for="(item, i) in historia"
        :key="item.id"
        class="timeline__item"
        :class="i % 2 === 0 ? 'timeline__item--esquerda' : 'timeline__item--direita'"
        v-reveal="{ delay: (i % 4) * 100 }"
      >
        <div class="timeline__ponto"></div>
        <div class="timeline__card">
          <img :src="item.foto" :alt="item.titulo" class="timeline__foto" />
          <span class="timeline__data">{{ item.data }}</span>
          <h3 class="timeline__titulo">{{ item.titulo }}</h3>
          <p class="timeline__texto">{{ item.texto }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;
}

.timeline__linha {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: linear-gradient(var(--cor-primaria-clara), var(--cor-dourado));
  transform: translateX(-50%);
}

.timeline__item {
  position: relative;
  width: 50%;
  padding: 0 40px 60px;
}

.timeline__item--esquerda {
  left: 0;
  text-align: right;
}

.timeline__item--direita {
  left: 50%;
  text-align: left;
}

.timeline__ponto {
  position: absolute;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--cor-primaria);
  border: 3px solid var(--cor-bg);
  box-shadow: 0 0 0 3px var(--cor-primaria-clara);
}

.timeline__item--esquerda .timeline__ponto {
  right: -8px;
}

.timeline__item--direita .timeline__ponto {
  left: -8px;
}

.timeline__card {
  background: var(--cor-branco);
  border-radius: var(--raio);
  padding: 18px;
  box-shadow: 0 12px 30px -14px var(--cor-sombra);
  transition: transform var(--transicao);
}

.timeline__card:hover {
  transform: translateY(-6px);
}

.timeline__foto {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;
}

.timeline__data {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--cor-dourado);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.timeline__titulo {
  font-size: 1.2rem;
  margin-bottom: 6px;
}

.timeline__texto {
  color: var(--cor-texto-suave);
  font-size: 0.95rem;
  margin: 0;
}

@media (max-width: 720px) {
  .timeline__linha {
    left: 18px;
  }

  .timeline__item,
  .timeline__item--esquerda,
  .timeline__item--direita {
    width: 100%;
    left: 0;
    text-align: left;
    padding: 0 0 40px 50px;
  }

  .timeline__item--esquerda .timeline__ponto,
  .timeline__item--direita .timeline__ponto {
    left: 10px;
  }
}
</style>
