<script>

import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
import CategoriesShow from './CategoriesShow.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    CategoriesShow,
  },
}

</script>

<template>
  <div class="app-container">

    <AppHeader />


    <div class="main-container">
      <div class="jumbotron">
        <div class="jumbotron-img-container">
          <img src="../assets/img/bags.jpg" alt="bags">
          <div class="img-veiling"></div>
        </div>
        <div class="jumbotron-description">
          <h1>Risparmia Subito!</h1>
          <p>Esplora occasioni straordinarie e risparmia in grande con i coupon esclusivi di COUPICKR. Inizia a
            risparmiare oggi stesso!</p>
          <button>Inizia lo shopping</button>
        </div>
      </div>

      <CategoriesShow />

    </div>


    <AppFooter />

  </div>
</template>

<style scoped></style>
