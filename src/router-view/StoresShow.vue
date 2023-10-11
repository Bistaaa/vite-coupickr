<script>
import axios from 'axios';
import { store } from '../store';
import { router } from '../router';
import StoreCard from '../components/StoreCard.vue';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
    name: 'StoresShow',
    components: {
        AppHeader,
        AppFooter,
        StoreCard
    },
    data() {
        return {
            store,
            stores: [],
        }
    },
    computed: {
        filteredStores() {
            // Filtra gli store in base alla proprietà is_hidden
            return this.store.storesList.filter(singleStore => singleStore.is_hidden === 0);
        }
    },
    mounted() {
        window.scrollTo(0, 0);
        this.fetchStores();
    },
    methods: {
        fetchStores() {
            // Ottieni l'ID della categoria dalla route attuale
            const categoryId = this.$route.params.id;

            // Effettua una richiesta Axios per ottenere la lista degli store della categoria
            axios.get(store.apiURL + '/home/' + categoryId + '/stores')
                .then(response => {
                    // Salva la lista degli store nello store
                    store.storesList = response.data.stores;

                    // Salva i dati della categoria selezionata nello store
                    store.categorySelected = response.data.categorySelected;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        redirectToAppMain() {
            router.push({ name: 'AppMain' });
        },
    }
}
</script>

<template>
    <AppHeader />

    <div class="stores-container">
        <h2>Scegli l'offerta migliore per te!</h2>
        <div class="store-cards-container">
            <div class="storeshow-card" v-for="(singleStore, index) in filteredStores" :key="singleStore.id">
                <StoreCard :singleStore="singleStore" />
            </div>
        </div>
        <button class="back-button" @click="redirectToAppMain">torna alla lista delle categorie </button>
    </div>

    <AppFooter />
</template>

<style lang="scss">
@use '../styles/general.scss'
</style>