<script>
import axios from 'axios';
import { store } from '../store';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';


export default {
    name: 'StoresShow',
    components: {
        AppHeader,
        AppFooter,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <AppHeader />

    <div class="stores-container">
        <h1>Heloooooooo?</h1>
    </div>

    <AppFooter />
</template>

<style lang="scss">@use '../styles/general.scss'</style>