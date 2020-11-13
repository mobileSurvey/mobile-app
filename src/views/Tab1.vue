<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{srcc}}</ion-title>
          <!-- <img :src="require(`../assets/Fauzan.jpg`)"/> 
          <ion-img :src="require(`../assets/Fauzan.jpg`)"></ion-img> -->
     
        </ion-toolbar>
      </ion-header>
    
      <!-- <ExploreContainer name="Tab 1 page" /> -->
     <GoogleMap
    :center="{ lat: -7.1234, lng: 110.1234 }"
    :zoom="4"
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
// import ExploreContainer from '../components/ExploreContainer.vue';



export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data(){
    return{
       srcc : '../assets/Fauzan.jpg'
    }
   
  },
  
}
</script>