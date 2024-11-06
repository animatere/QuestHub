import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// PrimeVue
import PrimeVue from 'primevue/config';
import Aura from "@primevue/themes/aura";

// FontAwesome Stuff
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCoffee, faHouse, faStar, faFire, faSun, faMessage, faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons';

// General
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Add icons to the FontAwesome library
library.add(faHeart, faCoffee, faHouse, faStar, faFire, faSun, faMessage, faWineGlassEmpty);

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.mount('#app')

