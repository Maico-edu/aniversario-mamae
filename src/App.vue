<script setup>
import NavBar from './components/NavBar.vue'
import RodapeSite from './components/RodapeSite.vue'
import BotaoTopo from './components/BotaoTopo.vue'
import LoaderInicial from './components/LoaderInicial.vue'
import ParticulasFundo from './components/ParticulasFundo.vue'
import CursorPersonalizado from './components/CursorPersonalizado.vue'
import SurpresaView from './views/SurpresaView.vue'
</script>

<template>
  <LoaderInicial />
  <CursorPersonalizado />
  <ParticulasFundo />

  <NavBar />

  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>

  <RodapeSite />
  <BotaoTopo />
</template>
