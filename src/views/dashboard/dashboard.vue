<template>
  <div>
    here is dashboard
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
export default {
  name: 'Dashboard',
  data() {
    return {
      form: {
        email: null,
        password: null
      },
      confirmpassword: null
    }
  },
  mounted() {
  }
}
</script>
