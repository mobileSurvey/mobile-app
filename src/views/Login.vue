<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <span v-if="pesan">{{pesan}}</span>
        <input type="text" v-model="username"/>
         <input type="password" v-model="password"/>
         
           <ion-button expand="block" @click="loginn()">Login</ion-button>
       
    </ion-content>
  </ion-page>
</template>
<script>

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import axios from 'axios';
import { Plugins } from '@capacitor/core';
 import { useRouter } from 'vue-router';


const { Storage } = Plugins;
export default  {
  name: 'Login',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonButton },

  data(){
      return{
          username: '',
          password: '',
          pesan: ''
      }
  },
    setup() {
      const router = useRouter();
     
      return { router };
    },
  methods:{
      loginn(){
          let vm = this;
        
              axios.post('http://sideku.org:8801/user/login', {
                 username: this.username,
                 password: this.password
               
              })
              .then(async function (response) {
                  if(response.data.token){
                       await Storage.set({
                    key: 'token',
                    value: JSON.stringify({
                    id: 1,
                    token: response.data.token
                    })
                });
                vm.pesan = '';
              
                vm.router.push('/tabs/tab1')
                //   (route.query.tujuan)?
                //     route.push({ path: this.$route.query.tujuan}): 
                //     route.push({ path: '/'})
                  }else{
                      vm.pesan = response.data.message;
                  }
                 
              })
              .catch(function (error) {
                   console.log(error)
              });
      }
  }
}
</script>