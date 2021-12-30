import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
// import googleMap from 'googlemaps-vue3'

// const googleMapOption = {
//     apiKey: 'AIzaSyA6hlb5UYJmQ9mctsn_p6D6ZbriORkikiY',

  
// }

const app = createApp(App)
  .use(IonicVue)
  .use(router);

  app.config.globalProperties.$ipBackend = 'http://msurvey.salatiga.go.id'
  // app.config.globalProperties.$ipBackend = 'http://192.168.1.19:8870'
  // app.use(googleMap, googleMapOption);
router.isReady().then(() => {
  app.mount('#app');
});