<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from "./components/Menu.vue";
import axios from "axios";
import Cookies from "js-cookie";
import {store} from "./store";

axios.get('/api/info', {
  headers: {'Authorization': Cookies.get('token')}
}).then(res => {
  if(res.data.error == undefined) {
    store.is_connected = true;
  }
});

</script>

<template>
    <Menu/>

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
