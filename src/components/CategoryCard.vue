<script>
import { store } from '../store';

export default {
    name: 'CategoryCard',
    props: {
        category: {
            type: Object
        }
    },
    data() {
        return {
            store,
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="card-container">
        <!-- <router-link
      class="btn"
      :to="{ 
        name: 'DishesShow',
        params: { id: restaurant.id }
      }"
    > -->
        <div class="container-category-img">
            <img :src="store.imageURL + category.img" :alt="category.name" />
        </div>
        <h3>{{ category.name }}</h3>
        <button class="category-button">Vai a {{ category.name }}</button>


        <!-- </router-link> -->
    </div>
</template>

<style lang="scss" scoped></style>