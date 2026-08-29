<script setup>
import { versiculos } from '../data/versiculos.js'
</script>

<template>
  <section class="pagina container">
    <h2 class="titulo-secao" v-reveal>Versículos</h2>
    <p class="subtitulo-secao" v-reveal>Versículos que falam da nossa família e do amor que nos une.</p>

    <div class="versiculos">
      <div
        v-for="(v, i) in versiculos"
        :key="v.id"
        class="cartao-versiculo"
        v-reveal="{ delay: (i % 4) * 100 }"
      >
        <span class="cartao-versiculo__tema">{{ v.tema }}</span>
        <p class="cartao-versiculo__texto">"{{ v.texto }}"</p>
        <span class="cartao-versiculo__referencia">— {{ v.referencia }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.versiculos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
}

.cartao-versiculo {
  background: var(--cor-bg-alt);
  border: 1px solid rgba(203, 161, 90, 0.25);
  border-radius: var(--raio);
  padding: 26px;
  position: relative;
  transition: transform var(--transicao), box-shadow var(--transicao);
}

.cartao-versiculo:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px -18px var(--cor-sombra);
}

.cartao-versiculo__tema {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #fff;
  background: var(--cor-primaria);
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 14px;
}

.cartao-versiculo__texto {
  font-family: var(--fonte-titulo);
  font-style: italic;
  font-size: 1.05rem;
  color: var(--cor-texto);
}

.cartao-versiculo__referencia {
  display: block;
  margin-top: 10px;
  color: var(--cor-dourado);
  font-weight: 600;
  font-size: 0.88rem;
}
</style>
