<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'


const menuAberto = ref(false)

const links = [
  { rota: '/', texto: 'Início' },
  { rota: '/galeria', texto: 'Galeria' },
  { rota: '/carta', texto: 'Carta' },
  { rota: '/motivos', texto: 'Motivos' },
  { rota: '/mensagens', texto: 'Mensagens' },
  { rota: '/versiculos', texto: 'Versículos' },
  { rota: '/memorias', texto: 'Memórias' },
  { rota: '/musica', texto: 'Música' },
  { rota: '/surpresa', texto: 'Surpresa ✨' },
]

function fecharMenu() {
  menuAberto.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="navbar__conteudo container">
      <RouterLink to="/" class="navbar__logo" @click="fecharMenu">
        Para Mamae <span>❤️</span>
      </RouterLink>

      <button
        class="navbar__hamburguer"
        :class="{ 'navbar__hamburguer--aberto': menuAberto }"
        @click="menuAberto = !menuAberto"
        aria-label="Abrir menu"
      >
        <span></span><span></span><span></span>
      </button>

      <nav class="navbar__links" :class="{ 'navbar__links--aberto': menuAberto }">
        <RouterLink
          v-for="link in links"
          :key="link.rota"
          :to="link.rota"
          class="navbar__link"
          @click="fecharMenu"
        >
          {{ link.texto }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(253, 248, 244, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(203, 161, 90, 0.15);
}

.navbar__conteudo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.navbar__logo {
  font-family: var(--fonte-titulo);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--cor-primaria);
  white-space: nowrap;
}

.navbar__links {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.navbar__link {
  padding: 8px 14px;
  font-size: 0.92rem;
  color: var(--cor-texto-suave);
  border-radius: 30px;
  transition: background var(--transicao), color var(--transicao);
}

.navbar__link:hover,
.navbar__link.router-link-active {
  background: var(--cor-primaria-clara);
  color: var(--cor-texto);
}

.navbar__hamburguer {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 8px;
}

.navbar__hamburguer span {
  width: 24px;
  height: 2px;
  background: var(--cor-primaria);
  transition: transform var(--transicao), opacity var(--transicao);
}

.navbar__hamburguer--aberto span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__hamburguer--aberto span:nth-child(2) {
  opacity: 0;
}
.navbar__hamburguer--aberto span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 900px) {
  .navbar__hamburguer {
    display: flex;
  }

  .navbar__links {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: var(--cor-bg);
    flex-direction: column;
    align-items: stretch;
    padding: 10px 20px 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transicao);
  }

  .navbar__links--aberto {
    max-height: 600px;
    box-shadow: 0 12px 20px -10px var(--cor-sombra);
  }

  .navbar__link {
    padding: 12px 14px;
  }
}
</style>
