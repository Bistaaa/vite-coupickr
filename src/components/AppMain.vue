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
  <div class="app-container">

    <AppHeader />


    <div class="main-container">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae officia id facere corporis dolores architecto
      nisi fugiat explicabo tenetur, labore cumque placeat exercitationem amet, ipsa magni eligendi necessitatibus
      corrupti asperiores?
    </div>


    <AppFooter />

  </div>
</template>

<style scoped></style>
