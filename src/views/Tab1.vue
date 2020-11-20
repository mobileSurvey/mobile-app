<template>
  <ion-page>
    <ion-content :fullscreen="true">
      
    
      <!-- <ExploreContainer name="Tab 1 page" /> -->
     <Gmap
 
    :center="{ lat: -8.333363311313447, lng: 110.50523502681817 }"
    :zoom="8"
    :clickActive="true"
    :getLatLng="true"
    :mapType="'hybrid'"
    :moveActive="false"
    :polylines="{
      strokeColor: '#FF0000',
      coords: [
        { lat: 37.772, lng: -122.214 },
        { lat: 21.291, lng: -157.821 },
        { lat: -18.142, lng: 178.431 },
        { lat: -27.467, lng: 153.027 },
      ],
    }"
    :markers="[
      {
        lat: 38.423733,
        lng: 27.142826,
        draggable: true,
        title: 'title 1',
        infoWindow: '<h1>this is my info</h1>',
      },
      {
        lat: 41.015137,
        lng: 28.97953,
        draggable: true,
        title: 'title 2',
      },
    ]"
  />
     
    </ion-content>
  </ion-page>
</template>

<script >
import { IonPage, IonContent } from '@ionic/vue';
// import ExploreContainer from '../components/ExploreContainer.vue';

import Gmap from '../components/Gmap.vue';

export default  {
  name: 'Tab1',
  components: { IonContent, IonPage, Gmap },
  data(){
    return{
       srcc : '../assets/Fauzan.jpg'
    }
   
  },
  
}
</script>