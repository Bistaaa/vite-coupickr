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
        <div class="container-category-img">
            <router-link class="btn" :to="{ name: 'StoresShow', params: { id: category.id } }">
                <img :src="store.imageURL + category.img" :alt="category.name" />
            </router-link>
        </div>
        <h3>{{ category.name }}</h3>
        <button class="category-button">Vai a {{ category.name }}</button>


    </div>
</template>

<style lang="scss" scoped></style>