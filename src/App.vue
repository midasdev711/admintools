<template>
  <div id="app">
    <router-view />
    <notifications position="bottom right"/>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
export default {
  name: 'App',
  methods: {
    ...mapActions('auth', ['loadCurrentUser']),
  },
  async mounted() {
    await this.loadCurrentUser();
  }
}
</script>