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
        handleImageError(event) {
            event.target.src = this.store.errorImageURL + this.category.img;
        }
    }
}
</script>

<template>
    <div class="card-container" v-if="category.is_hidden === 0">
        <div class="container-category-img">
            <router-link class="btn" :to="{ name: 'StoresShow', params: { id: category.id } }">
                <img :src="store.imageURL + category.img" @error="handleImageError" :alt="category.name" />
                <div class="category-card-overlay">
                    <span>{{ category.name }}</span>
                </div>
            </router-link>
        </div>
        <h3>{{ category.name }}</h3>
        <router-link class="category-button" :to="{ name: 'StoresShow', params: { id: category.id } }">
            Vai a {{ category.name }}
        </router-link>


    </div>
</template>

<style lang="scss" scoped></style>