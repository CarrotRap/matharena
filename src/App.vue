<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from "./components/Menu.vue";
import {ref} from "vue";

let isConnected = ref(false);
</script>

<template>
  <Menu :isConnected="isConnected"/>

  <RouterView />
</template>

<style>
.big-container {

}
</style>
