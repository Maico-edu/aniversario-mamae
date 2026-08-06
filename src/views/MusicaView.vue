<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { musicas } from '../data/musicas.js'

const indiceAtual = ref(0)
const tocando = ref(false)
const progresso = ref(0) 
const duracao = ref(0)
const volume = ref(0.7)
const audioRef = ref(null)

const musicaAtual = computed(() => musicas[indiceAtual.value])

function alternarPlay() {
  if (!audioRef.value) return
  if (tocando.value) {
    audioRef.value.pause()
  } else {
    audioRef.value.play().catch(() => {
         })
  }
}

function aoTocar() {
  tocando.value = true
}
function aoPausar() {
  tocando.value = false
}
function aoAtualizarTempo() {
  progresso.value = audioRef.value?.currentTime || 0
}
function aoCarregarMetadados() {
  duracao.value = audioRef.value?.duration || 0
}

function trocarMusica(direcao) {
  indiceAtual.value = (indiceAtual.value + direcao + musicas.length) % musicas.length
}

function selecionarMusica(i) {
  indiceAtual.value = i
}

function moverProgresso(e) {
  const novoTempo = Number(e.target.value)
  if (audioRef.value) audioRef.value.currentTime = novoTempo
  progresso.value = novoTempo
}

function formatarTempo(segundos) {
  if (!segundos || Number.isNaN(segundos)) return '0:00'
  const m = Math.floor(segundos / 60)
  const s = Math.floor(segundos % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

watch(volume, (v) => {
  if (audioRef.value) audioRef.value.volume = v
})


watch(indiceAtual, async () => {
  progresso.value = 0
  if (tocando.value) {
    await new Promise((r) => setTimeout(r, 50))
    audioRef.value?.play().catch(() => {})
  }
})

onMounted(() => {
  if (audioRef.value) audioRef.value.volume = volume.value
})
onUnmounted(() => {
  audioRef.value?.pause()
})
</script>

<template>
  <section class="pagina container">
    <h2 class="titulo-secao" v-reveal>Nossa Playlist</h2>
    <p class="subtitulo-secao" v-reveal>Músicas que marcam nossa familia</p>

    <div class="player" v-reveal>
      <img :src="musicaAtual.capa" :alt="musicaAtual.titulo" class="player__capa" />

      <h3 class="player__titulo">{{ musicaAtual.titulo }}</h3>
      <p class="player__artista">{{ musicaAtual.artista }}</p>

      <audio
        ref="audioRef"
        :src="musicaAtual.src"
        @play="aoTocar"
        @pause="aoPausar"
        @timeupdate="aoAtualizarTempo"
        @loadedmetadata="aoCarregarMetadados"
        @ended="trocarMusica(1)"
      ></audio>

      <div class="player__progresso">
        <span>{{ formatarTempo(progresso) }}</span>
        <input
          type="range"
          min="0"
          :max="duracao || 0"
          step="0.1"
          :value="progresso"
          @input="moverProgresso"
        />
        <span>{{ formatarTempo(duracao) }}</span>
      </div>

      <div class="player__controles">
        <button class="player__botao" @click="trocarMusica(-1)" aria-label="Música anterior">⏮</button>
        <button class="player__botao player__botao--play" @click="alternarPlay" :aria-label="tocando ? 'Pausar' : 'Tocar'">
          {{ tocando ? '⏸' : '▶' }}
        </button>
        <button class="player__botao" @click="trocarMusica(1)" aria-label="Próxima música">⏭</button>
      </div>

      <div class="player__volume">
        <span>🔈</span>
        <input type="range" min="0" max="1" step="0.01" v-model.number="volume" />
      </div>
    </div>

    <ul class="playlist">
      <li
        v-for="(m, i) in musicas"
        :key="m.id"
        class="playlist__item"
        :class="{ 'playlist__item--ativo': i === indiceAtual }"
        @click="selecionarMusica(i)"
      >
        <img :src="m.capa" :alt="m.titulo" />
        <div>
          <strong>{{ m.titulo }}</strong>
          <span>{{ m.artista }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.player {
  max-width: 380px;
  margin: 0 auto 40px;
  background: var(--cor-branco);
  border-radius: var(--raio-grande);
  padding: 30px;
  text-align: center;
  box-shadow: 0 25px 55px -24px var(--cor-sombra);
}

.player__capa {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 auto 18px;
  box-shadow: 0 16px 30px -14px var(--cor-sombra);
}

.player__titulo {
  font-size: 1.2rem;
  margin-bottom: 2px;
}

.player__artista {
  color: var(--cor-texto-suave);
  font-size: 0.9rem;
}

.player__progresso {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 18px 0 6px;
  font-size: 0.75rem;
  color: var(--cor-texto-suave);
}

.player__progresso input[type='range'] {
  flex: 1;
  accent-color: var(--cor-primaria);
}

.player__controles {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin: 14px 0;
}

.player__botao {
  background: none;
  border: none;
  font-size: 1.3rem;
  color: var(--cor-primaria);
}

.player__botao--play {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cor-primaria), var(--cor-dourado));
  color: #fff;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.player__volume {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 0.9rem;
}

.player__volume input {
  width: 100px;
  accent-color: var(--cor-primaria);
}

.playlist {
  list-style: none;
  padding: 0;
  max-width: 440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.playlist__item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 14px;
  border-radius: 12px;
  cursor: pointer;
  transition: background var(--transicao);
}

.playlist__item:hover {
  background: var(--cor-bg-alt);
}

.playlist__item--ativo {
  background: var(--cor-primaria-clara);
}

.playlist__item img {
  width: 46px;
  height: 46px;
  border-radius: 8px;
  object-fit: cover;
}

.playlist__item div {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}

.playlist__item span {
  color: var(--cor-texto-suave);
  font-size: 0.78rem;
}
</style>
