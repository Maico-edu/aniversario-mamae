<script setup>
import { mensagens } from '../data/mensagens.js'

function iniciais(nome) {
  return nome
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
</script>

<template>
  <section class="pagina container">
    <h2 class="titulo-secao" v-reveal>Mensagens da Família</h2>
    <p class="subtitulo-secao" v-reveal>Palavras que vêm direto do meu core</p>

    <div class="mensagens">
      <div
        v-for="(m, i) in mensagens"
        :key="m.id"
        class="cartao-mensagem"
        v-reveal="{ delay: (i % 4) * 100 }"
      >
        <div class="cartao-mensagem__cabecalho">
          <div class="cartao-mensagem__avatar">
            <img v-if="m.foto" :src="m.foto" :alt="m.nome" />
            <span v-else>{{ iniciais(m.nome) }}</span>
          </div>
          <strong class="cartao-mensagem__nome">{{ m.nome }}</strong>
        </div>
        <p class="cartao-mensagem__texto">{{ m.texto }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mensagens {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
}

.cartao-mensagem {
  background: var(--cor-branco);
  border-radius: var(--raio);
  padding: 24px;
  box-shadow: 0 14px 30px -16px var(--cor-sombra);
  border-left: 4px solid var(--cor-primaria);
  transition: transform var(--transicao);
}

.cartao-mensagem:hover {
  transform: translateY(-5px);
}

.cartao-mensagem__cabecalho {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.cartao-mensagem__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--cor-primaria-clara);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--cor-texto);
  overflow: hidden;
  flex-shrink: 0;
}

.cartao-mensagem__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cartao-mensagem__nome {
  font-family: var(--fonte-titulo);
}

.cartao-mensagem__texto {
  color: var(--cor-texto-suave);
  font-size: 0.96rem;
  margin: 0;
}
</style>
