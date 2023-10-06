<script>
import axios from 'axios';
import { store } from '../store';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
    name: 'StoreInfo',
    components: {
        AppHeader,
        AppFooter
    },

    data() {
        return {
            store,
            storeData: {}
        };
    },
    methods: {
        fetchStoreDetails() {

            const storeId = this.$route.params.id;

            axios.get(store.apiURL + '/store/' + storeId)
                .then(response => {
                    this.storeData = response.data.StoreById;

                })
                .catch(error => {
                    console.error("Error fetching store details:", error.response);
                });
        },

        handleImageError(event) {
            event.target.src = this.store.errorImageURL + this.storeData.logo;
        },
    },
    created() {
        this.fetchStoreDetails();
    }
}
</script>

<template>
    <AppHeader />

    <div class="store-info-container">
        <h2>{{ this.storeData.store_name }}</h2>
        <div class="lower-container">
            <div class="left-column">
                <ul>
                    <li class="left-column-info"><span>Codice Sconto:</span><span>{{ this.storeData.affiliation_code
                    }}</span></li>
                    <hr>
                    <li class="left-column-info"><span>Risparmio:</span><span>{{ this.storeData.discount }} %</span></li>
                    <hr>
                    <li class="left-column-info"><span>Valido fino a:</span><span>{{ this.storeData.validity }}</span></li>
                </ul>
            </div>
            <div class="img">
                <img :src="this.store.imageURL + this.storeData.logo" @error="handleImageError"
                    :alt="this.storeData.store_name">
            </div>
            <div class="description-container">
                <span>Info riguardo {{ this.storeData.store_name }}</span>
                <p class="description">{{ this.storeData.description }}</p>
                <a :href="this.storeData.link">
                    <button class="store-button">Vai al sito</button>
                </a>
            </div>
        </div>
    </div>

    <AppFooter />
</template>