<script lang="ts">
import {defineComponent, ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router';

export default defineComponent({
  name: "Menu",
  props: {
    isConnected: {
      type: Boolean,
      required: true,
    }
  },
  setup() {
    const isOpen = ref(false)
    return { isOpen }
  }
})
</script>

<template>
  <div class="menu">
    <header class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">

          <!-- Logo -->
          <div class="text-xl font-bold">
            MathArena
          </div>

          <!-- Menu desktop -->
          <nav class="hidden md:flex space-x-6">
            <RouterLink to="/">
              <a href="#" class="hover:text-gray-300 transition">Accueil</a>
            </RouterLink>
            <RouterLink to="/exercices">
              <a href="#" class="hover:text-gray-300 transition">Exercices</a>
            </RouterLink>
            <RouterLink to="/publish">
              <a href="#" class="hover:text-gray-300 transition">Publier</a>
            </RouterLink>
            <RouterLink to="/connect">
              <a v-if="!isConnected" href="#" class="hover:text-gray-300 transition">Se connecter</a>
            </RouterLink>
            <RouterLink to="/account">
              <a v-if="isConnected" href="#" class="hover:text-gray-300 transition">Mon compte</a>
            </RouterLink>
          </nav>

          <!-- Burger menu mobile -->
          <div class="md:hidden">
            <button @click="isOpen = !isOpen" class="focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"/>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Menu mobile -->
      <nav v-if="isOpen" class="md:hidden bg-gray-700 px-2 pt-2 pb-3 space-y-1">
        <RouterLink to="/">
          <a href="#" class="block px-3 py-2 rounded hover:bg-gray-600 transition">Accueil</a>
        </RouterLink>
        <RouterLink to="/exercices">
          <a href="#" class="block px-3 py-2 rounded hover:bg-gray-600 transition">Exercices</a>
        </RouterLink>
        <RouterLink to="/publish">
          <a href="#" class="block px-3 py-2 rounded hover:bg-gray-600 transition">Publier</a>
        </RouterLink>
        <RouterLink to="/connect">
          <a v-if="!isConnected" href="#" class="block px-3 py-2 rounded hover:bg-gray-600 transition">Se connecter</a>
        </RouterLink>
        <RouterLink to="/account">
          <a v-if="isConnected" class="block px-3 py-2 rounded hover:bg-gray-600 transition">Mon compte</a>
        </RouterLink>
      </nav>
    </header>
  </div>

</template>

<style scoped>

</style>