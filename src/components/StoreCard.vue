<script>
import axios from 'axios';
import { store } from '../store';
import { router } from '../router';

export default {
    name: 'StoreShow',
    props: {
        singleStore: {
            type: Object
        }
    },

    methods: {
        redirectToStoreInfo() {
            router.push({ name: 'StoreInfo', params: { id: this.singleStore.id } });
        },
        handleImageError(event) {
            event.target.src = this.store.errorImageURL + this.singleStore.logo;
        }
    },

    data() {
        return {
            store
        }
    },

    mounted() {
        console.log('verifica', this.singleStore);
    }
}
</script>

<template>
    <div class="storeshow-info-container">
        <div class="img-container" @click="redirectToStoreInfo">
            <img :src="store.imageURL + this.singleStore.logo" @error="handleImageError" :alt="this.singleStore.logo">
            <div class="store-card-overlay">
                <span>{{ this.singleStore.store_name }}</span>
            </div>
        </div>
        <div class="info-container">
            <span class="affiliation-code">{{ this.singleStore.affiliation_code }}</span>
            <span class="discount">{{ this.singleStore.discount }} %</span>
        </div>
        <h3>{{ this.singleStore.store_name }}</h3>
        <span class="end-offer">Fine Offerta: <b>{{ this.singleStore.validity }}</b></span>
        <hr>
    </div>
    <a class="storeshow-button" :href="this.singleStore.link">
        <span>Vai al sito</span>
    </a>
</template>

<style lang="scss" scoped></style>