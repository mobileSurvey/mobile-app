<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

import { Plugins } from '@capacitor/core';

const {StatusBar } = Plugins;
  StatusBar.setBackgroundColor({color:'#2fafd5'});
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap');
@font-face{
  font-family: "Mukta";
  src: local("Mukta"),
  url(./assets/font/Mukta-Light.ttf)
}

body{
  font-family: 'Mukta', sans-serif;
  } */
</style>