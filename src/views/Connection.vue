<template>
  <div class="connection bg-gray-100">
    <div class="connection-container">
      <div class="bg-white rounded-xl shadow-lg p-6">
        <div v-if="is_new">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
            Connexion
          </h2>

          <div class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
              <input
                  type="text"
                  placeholder="fou_des_maths"
                  class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
              />
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input

                  type="password"
                  id="password"
                  placeholder="********"
                  class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
              />
            </div>

            <button
                @click="connect"
                class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition font-medium"
            >
              Se connecter
            </button>
          </div>
        </div>
        <div v-if="!is_new">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
            Inscription
          </h2>

          <div class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
              <input
                  type="text"
                  placeholder="fou_du_bus"
                  class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                  @input="check_password"
                  type="password"
                  placeholder="********"
                  class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
              />
              <label class="block text-sm font-xs text-gray-500">{{ info_password }}</label>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Confirmation mot de passe</label>
              <input
                  @input="same_password"
                  type="password"
                  placeholder="********"
                  class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
              />
              <label class="block text-sm font-xs text-gray-500">{{ info_password_confirm }}</label>
            </div>

            <!-- Bouton -->
            <button
                @click="register"
                class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition font-medium"
            >
              S'inscrire
            </button>
          </div>
        </div>

          <button @click="is_new = !is_new" class="w-full text-center text-xs font-300 hover:color-#00f">
            {{ is_new ? 'Vous êtes nouveau, inscrivez-vous ici.' : 'Vous êtes ancien, connectez-vous ici.'}}
          </button>

    </div>
      </div>
  </div>



</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { passwordStrength } from "check-password-strength";

export default defineComponent({
  name: "ConnectionView",
  data() {
    return {
      is_new: true,
      info_password: '',
      info_password_confirm: '',
      timeout_id: 0,
      password: ''
    }
  },
  methods: {
    check_password(event:Event) {
      const target = event.target as HTMLInputElement;
      const id = passwordStrength(target.value).id

      this.password = target.value;

      if (id == 0) { this.info_password = 'Mot de passe trop faible'}
      else if (id == 1) { this.info_password = 'Mot de passe faible'}
      else if (id > 1) { this.info_password = 'Mot passe satisfaisant'}

      clearTimeout(this.timeout_id);

      this.timeout_id = setTimeout(() => {
        this.info_password = '';
      }, 3000)
    },
    same_password(event:Event) {
      const target = event.target as HTMLInputElement;
      if (target.value != this.password) {
        this.info_password_confirm = 'Pas le même mot de passe';
      } else {
        this.info_password_confirm = '';
      }
    },
    connect() {
      console.log('connection')
    },
    register() {
      console.log('register')
    }
  }
})
</script>

<style scoped>
.connection {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}

.connection .connection-container{
  display: flex;
  justify-content: center;
}
</style>