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
            storeData: null,
        }
    },

    mounted() {
        const storeId = this.$route.params.id;

        axios.get(store.apiURL + '/store/' + storeId)
            .then(response => {

                this.storeData = response.data.StoreById;

                console.log('Dati dello store:', this.storeData);
            })
            .catch(error => {

                console.log('Errore nella richiesta API:', error);
            });


    }
}
</script>

<template>
    <AppHeader />

    <div class="store-info-container">
        <h2>{{ this.storeData ? this.storeData.store_name : 'Caricamento in corso...' }}</h2>
        <!-- Mostra il nome del negozio se i dati sono stati caricati, altrimenti mostra un messaggio di caricamento -->
    </div>

    <AppFooter />
</template>