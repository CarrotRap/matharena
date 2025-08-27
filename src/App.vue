<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from "./components/Menu.vue";
import { ref } from "vue";

let isConnected = ref(false);
</script>

<template>
    <Menu :isConnected="isConnected"/>

    <div class="main">
      <RouterView />
    </div>

</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app .main {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;

}
</style>
