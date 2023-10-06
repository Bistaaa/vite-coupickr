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
            console.log("Fetching details for store with ID:", storeId);

            axios.get(store.apiURL + '/store/' + storeId)
                .then(response => {
                    console.log("API response:", response);
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
                    <li class="left-column-info"><span>Risparmio:</span><span>{{ this.storeData.discount }} %</span></li>
                    <li class="left-column-info"><span>Valido fino a:</span><span>10/11/2023</span></li>
                    <a :href="this.storeData.link">
                        <li class="left-column-info"><span>Vai al sito</span></li>
                    </a>
                </ul>
            </div>
            <div class="img">
                <img :src="this.store.imageURL + this.storeData.logo" @error="handleImageError"
                    :alt="this.storeData.store_name">
            </div>
            <div class="description">
                <p>{{ this.storeData.description }}</p>
            </div>
        </div>
    </div>

    <AppFooter />
</template>