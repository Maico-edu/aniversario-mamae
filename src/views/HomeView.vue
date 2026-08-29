<script setup>
import { RouterLink } from 'vue-router'
import { useContador, calcularIdade } from '../composables/useContador'
import { configHomenagem } from '../data/config.js'

const idade = calcularIdade(configHomenagem.dataNascimento)
const { valorAtual } = useContador(idade)
</script>

<template>
  <section class="hero">
    <div class="hero__fundo"></div>

    <div class="hero__conteudo container">
      <div class="hero__foto-wrapper" v-reveal>
        <img
          class="hero__foto"
          :src="configHomenagem.fotoPrincipal"
          :alt="`Foto de ${configHomenagem.nomeMae}`"
        />
      </div>

      <h1 class="hero__titulo" v-reveal="{ delay: 150 }">
        Feliz Aniversário, {{ configHomenagem.nomeMae }} ❤️
      </h1>

      <p class="hero__mensagem" v-reveal="{ delay: 300 }">
        {{ configHomenagem.mensagemAbertura }}
      </p>

      <div class="hero__contador" v-reveal="{ delay: 450 }">
        <span class="hero__numero">{{ valorAtual }}</span>
        <span class="hero__label">anos iluminando nossa família</span>
      </div>

      <RouterLink to="/galeria" class="botao-principal" v-reveal="{ delay: 600 }">
        Começar ✨
      </RouterLink>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <span></span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 0 80px;
  overflow: hidden;
}


.hero__fundo {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(circle at 20% 20%, rgba(231, 182, 195, 0.55), transparent 45%),
    radial-gradient(circle at 80% 30%, rgba(203, 161, 90, 0.35), transparent 50%),
    radial-gradient(circle at 50% 90%, rgba(201, 116, 138, 0.25), transparent 50%);
  filter: blur(10px);
  animation: mover-fundo 18s ease-in-out infinite;
  z-index: 0;
}

@keyframes mover-fundo {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-2%, 2%) scale(1.06); }
}

.hero__conteudo {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
}

.hero__foto-wrapper {
  width: min(320px, 60vw);
  height: min(320px, 60vw);
  border-radius: 50%;
  padding: 8px;
  background: linear-gradient(135deg, var(--cor-dourado), var(--cor-primaria));
  box-shadow: 0 25px 60px -20px var(--cor-sombra);
  animation: flutuar 6s ease-in-out infinite;
}

.hero__foto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid var(--cor-bg);
}

.hero__titulo {
  font-size: clamp(2.2rem, 6vw, 3.6rem);
  max-width: 800px;
}

.hero__mensagem {
  max-width: 560px;
  color: var(--cor-texto-suave);
  font-size: 1.08rem;
}

.hero__contador {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 6px;
}

.hero__numero {
  font-family: var(--fonte-titulo);
  font-size: 3.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--cor-primaria), var(--cor-dourado));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
}

.hero__label {
  color: var(--cor-texto-suave);
  font-size: 0.95rem;
  margin-top: 4px;
}

.hero__scroll {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 26px;
  height: 42px;
  border: 2px solid var(--cor-primaria);
  border-radius: 20px;
  z-index: 2;
}

.hero__scroll span {
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--cor-primaria);
  animation: rolar 1.6s ease-in-out infinite;
}

@keyframes rolar {
  0% { top: 6px; opacity: 1; }
  70% { top: 22px; opacity: 0; }
  100% { top: 22px; opacity: 0; }
}
</style>
