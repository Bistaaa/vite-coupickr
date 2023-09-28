import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);


import { createApp } from 'vue';
import App from './App.vue'

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app');

