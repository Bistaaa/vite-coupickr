<script>
import AppMain from './router-view/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppMain
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@use './styles/general.scss'
</style>

