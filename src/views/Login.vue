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
       
        <ion-button expand="block" @click="loginn()" style="margin-top:15px">
           <ion-spinner name="crescent" v-if="loading"></ion-spinner>
          
          <span v-else>Login</span>
          </ion-button>
      </div>
      
        <!-- <input type="text" v-model="username"/> -->
         <!-- <input type="password" v-model="password"/> -->
         
           
       
    </ion-content>
  </ion-page>
</template>
<script>

import { IonPage, IonContent, IonButton, IonSpinner  } from '@ionic/vue';
import axios from 'axios';
import { Plugins } from '@capacitor/core';



const { Storage } = Plugins;




export default  {
  name: 'Login',
  components: { IonPage, IonContent, IonButton, IonSpinner  },

  data(){
      return{
          username: '',
          password: '',
          pesan: '',
          loading : false
      }
  },
  
  methods:{
      loginn(){
          let vm = this;
          vm.loading = true;
              axios.post(vm.$ipBackend+'/user/login', {
                 username: this.username,
                 password: this.password
               
              })
              .then(async function (response) {
                  vm.loading = false;
                console.log(response)
                  if(response.data.length>0){
                       await Storage.set({
                    key: 'token',
                    value: JSON.stringify(response.data[0])
                });
                vm.pesan = '';
               vm.$router.push('/tabs/tab1')
             
                //   (route.query.tujuan)?
                //     route.push({ path: this.$route.query.tujuan}): 
                //     route.push({ path: '/'})
                  }else{
                      vm.pesan = response.data.message;
                  }
                 
              })
              .catch(function (error) {
                  vm.loading = false;
                   console.log(error)
              });
      }
  },
  async created(){



     const ret = await Storage.get({ key: 'token' });
  const user = JSON.parse(ret.value);
    if(user.accesstoken){
      this.$router.push('/tabs/tab1')
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