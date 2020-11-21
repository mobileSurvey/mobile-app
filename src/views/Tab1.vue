<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <ion-grid>
      <ion-row>
      <ion-col size="3" >
           HALO
     {{dataUser.username}}
      </ion-col>
      <ion-col size="3" offset="5">
        <ion-button color="danger" @click="logout">Logout</ion-button>
      </ion-col>
    </ion-row>

 
  </ion-grid>
     
    </ion-content>
  </ion-page>
</template>

<script >
import { IonPage, IonContent, IonCol, IonGrid, IonRow, IonButton, alertController  } from '@ionic/vue';
// import ExploreContainer from '../components/ExploreContainer.vue';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export default  {
  name: 'Tab1',
  components: { IonContent, IonPage, IonCol, IonGrid, IonRow, IonButton },
data(){
     

    return{
       srcc : '../assets/Fauzan.jpg',
       dataUser: {}
    }
   
  },
  async created(){
    const ret = await Storage.get({ key: 'token' });
    this.dataUser = JSON.parse(ret.value);
  },
  methods:{
   async logout(){
      let vm = this;
       const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Perhatian!',
          message: 'Apakah yakin akan logout?',
          buttons: [
            {
              text: 'Batal',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                console.log('Confirm Cancel:', blah)
              },
            },
            {
              text: 'Ya',
              handler:async () => {
                  await Storage.set({
                    key: 'token',
                    value: JSON.stringify({})
                });
                vm.$router.push('/')
              },

            },
          ],
        });
      return alert.present();
    }
  }
  
}
</script>