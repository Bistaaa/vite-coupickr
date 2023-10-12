<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'Newsletter',
    data() {
        return {
            store,
            userInfos: {
                name: '',
                surname: '',
                email: ''
            },
            successMessage: '',
            errorMessage: ''
        }
    },
    methods: {
        handleSubmit() {
            this.subscribeToNewsletter();
        },
        subscribeToNewsletter() {
            const subscribeURL = `${this.store.apiURL}/subscribe`;
            axios.post(subscribeURL, this.userInfos)
                .then(response => {
                    this.successMessage = response.data.message;
                    this.errorMessage = '';  // Resetta il messaggio di errore
                })
                .catch(error => {
                    this.errorMessage = error.response && error.response.data && error.response.data.message ?
                        error.response.data.message :
                        'Errore durante la sottoscrizione alla newsletter.';
                    this.successMessage = '';  // Resetta il messaggio di successo
                });
        }
    }
}
</script>

<template>
    <div class="newsletter-container">
        <h3>Iscriviti alla nostra Newsletter</h3>
        <p>Ricevi le ultime offerte e notizie direttamente nella tua casella di posta!</p>
        <form @submit.prevent="handleSubmit">
            <div class="input-container">
                <input type="text" v-model="userInfos.name" placeholder="Nome" required />
                <input type="text" v-model="userInfos.surname" placeholder="Cognome" required />
                <input type="email" v-model="userInfos.email" placeholder="Inserisci la tua email..." required />
                <button type="submit">Iscriviti</button>
            </div>
        </form>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<style lang="scss" scoped></style>
