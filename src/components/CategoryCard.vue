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
    <div class="container-card">
        <!-- <router-link
      class="btn"
      :to="{ 
        name: 'DishesShow',
        params: { id: restaurant.id }
      }"
    > -->

        <div class="content">
            <h3>{{ category.name }}</h3>
        </div>


        <!-- </router-link> -->
    </div>
</template>

<style lang="scss" scoped></style>