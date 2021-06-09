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
  async created() {
    await this.loadCurrentUser();
  }
}
</script>