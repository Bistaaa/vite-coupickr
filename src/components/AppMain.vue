<script>

import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
}

</script>

<template>
  <AppHeader />
  <h1>Hello, World!</h1>
  <AppFooter />
</template>

<style scoped></style>
