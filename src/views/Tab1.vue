<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="bg-box">
        <ion-grid style="position:absolute;left:0;right:0;bottom:-50px;">
          <ion-row>
            <ion-col style="background-color:red">
              <ion-row>
                <ion-col>
              <div style="width:100%;height:80px;background-color:pink"></div>
            </ion-col>

            <ion-col>
              <div style="width:100%;height:80px;background-color:pink"></div>
            </ion-col>
              </ion-row>
            </ion-col>

            
          </ion-row>
        </ion-grid>
      </div>
      
     
    </ion-content>
  </ion-page>
</template>

<script >
import { IonPage, IonContent, IonCol, IonGrid, IonRow, alertController  } from '@ionic/vue';
// import ExploreContainer from '../components/ExploreContainer.vue';
import { Plugins } from '@capacitor/core';

const { Storage, StatusBar } = Plugins;


// set status bar to white


export default  {
  name: 'Tab1',
  components: { IonContent, IonPage, IonCol, IonGrid, IonRow, },
data(){
     

    return{
       srcc : '../assets/Fauzan.jpg',
       dataUser: {}
    }
   
  },
  async created(){
    StatusBar.setBackgroundColor({color:'#1200d9'});
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

<style scoped>
.bg-box{
  background-color: yellow;
  height: 260px;
  position: relative;
}

</style>