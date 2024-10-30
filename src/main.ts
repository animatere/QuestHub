import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from "@primevue/themes/aura";

// FontAwesome Stuff
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Import icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Add icons to the FontAwesome library
library.add(faHeart);
library.add(faCoffee);
library.add(faHouse);
library.add(faStar);
library.add(faFire);
library.add(faSun);
library.add(faMessage);
library.add(faWineGlassEmpty);

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.mount('#app')

