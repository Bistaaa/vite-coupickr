<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'StoreShow',
    props: {
        singleStore: {
            type: Object
        }
    },
    components: {

    },

    data() {
        return {
            store
        }
    },

    mounted() {
        console.log('1: ', store);
        console.log('2: ', this.store);
        console.log('3: ', this.singleStore);
    }
}
</script>

<template>
    <div class="storeshow-info-container">
        <div class="img-container">
            <img :src="store.imageURL + this.singleStore.logo" :alt="this.singleStore.logo">
        </div>
        <div class="info-container">
            <span class="affiliation-code">{{ this.singleStore.affiliation_code }}</span>
            <span class="discount">{{ this.singleStore.discount }} %</span>
        </div>
        <h3>{{ this.singleStore.store_name }}</h3>
        <span class="end-offer">Fine Offerta: <b>10 novembre 2023</b></span>
        <hr>
    </div>
    <a class="storeshow-button" :href="this.singleStore.link">
        <span>Vai al sito</span>
    </a>
</template>

<style lang="scss" scoped></style>