<template>
  <div class="py-6">
    <div class="px-4 sm:px-6 md:px-0">
      <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
    </div>
    <div class="px-4 sm:px-6 md:px-0">
      <!-- Replace with your content -->
      <div class="py-4">
        <div class="h-96 border-4 border-dashed border-gray-200 rounded-lg" />
      </div>
      <!-- /End replace -->
    </div>
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
