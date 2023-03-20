<template>
  <v-app>
    <the-header v-if="!$route.params.auth" />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
</script>
