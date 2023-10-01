<script>
import axios from 'axios';
import { store } from '../store';
import CategoryCard from './CategoryCard.vue';

export default {
    name: 'CategoriesShow',
    components: {
        CategoryCard,
    },
    data() {
        return {
            categories: [],
        }
    },
    mounted() {
        window.scrollTo(0, 0);
        this.fetchCategories();
    },
    methods: {
        fetchCategories() {
            axios.get(`${store.apiURL}/home`)
                .then((response) => {
                    this.categories = response.data.categories;
                })
                .catch((error) => {
                    console.error('Errore nella richiesta delle categorie:', error);
                });
        },
    }
}
</script>

<template>
    <div class="main-content-container">
        <h2>Scegli la tua categoria</h2>
        <div id="categories-container">
            <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
        </div>
    </div>
</template>

<style scoped></style>
