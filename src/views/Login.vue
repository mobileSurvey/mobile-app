<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="bg">
        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="box">
                <h2 style="margin-top:0;margin-bottom:0"><strong>LOGIN</strong></h2>
                <h3 style="margin-top:0;margin-bottom:0"><strong>MOBILE SURVEY</strong></h3>
                <h3 style="margin-top:0;margin-bottom:0"><strong>KOTA SALATIGA</strong></h3>
                <ion-list lines="full" class="ion-no-margin">
                  <center>
                    <span v-if="pesan" class="pesannya">{{pesan}}</span>
                  </center>
                  
                  <ion-item >
                    <ion-label position="floating">Username</ion-label>
                    <ion-input type="text" :value="username"  @IonInput="username=$event.target.value" style="padding:0;margin:0"></ion-input>
                  </ion-item>

                  <ion-item>
                    <ion-label position="floating">Password</ion-label>
                    <ion-input type="password" :value="password" @IonInput="password=$event.target.value"></ion-input>
                  </ion-item>

                  <ion-button expand="block" @click="loginn()" style="margin-top:15px">
                  <ion-spinner name="crescent" v-if="loading"></ion-spinner>
                  
                  <span v-else>Login</span>
                  </ion-button>
                </ion-list>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      
      
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
  padding: 30px 30px;
  background-color: #fff;
  box-shadow:0 7px 20px 0 rgba(0,0,0,.2);
  border-radius: 10px;
}

.box h2{
  text-align: center;
}

.box h3{
  text-align: center;
}

:host{
  --padding-start:0px;
}

.bg{
  width: 100%;
  height: 260px;
  background-image: url(../assets/bg.png);
  background-size: cover;
  padding: 60px 15px;
}

span.pesannya{
  color: red;
  font-weight: bold;

}
</style>