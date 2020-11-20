<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="box">
        <h2>LOGIN</h2>
        <h3>MOBILE SURVEY</h3>
        <span v-if="pesan">{{pesan}}</span>
        <!-- <ion-item>
          <ion-label position="floating">Kegiatan</ion-label>
          <ion-input type="text" v-model="username"></ion-input>
        </ion-item> -->
        <!-- <ion-item>
          <ion-label position="floating">Kegiatan</ion-label>
          <ion-input type="text" v-model="username"></ion-input>
        </ion-item> -->
        <center>
           <input type="text" v-model="username" style="width:100%;margin-top:30px"/>
        <input type="password" v-model="password" style="width:100%;margin-top:15px"/>
        </center>
       
        <ion-button expand="block" @click="loginn()" style="margin-top:15px">Login</ion-button>
      </div>
      
        <!-- <input type="text" v-model="username"/> -->
         <!-- <input type="password" v-model="password"/> -->
         
           
       
    </ion-content>
  </ion-page>
</template>
<script>

import { IonPage, IonContent, IonButton } from '@ionic/vue';
import axios from 'axios';
import { Plugins } from '@capacitor/core';
 import { useRouter } from 'vue-router';


const { Storage } = Plugins;
export default  {
  name: 'Login',
  components: { IonPage, IonContent, IonButton },

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

<style scoped>
.box{
  padding: 60px 15px;
}

.box h2{
  text-align: center;
}

.box h3{
  text-align: center;
}
</style>