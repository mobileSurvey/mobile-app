<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="bg-box">
        <ion-grid>
          <ion-row>
            <ion-col>
              <div style="width:100%;background-color:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;flex-direction:column;height:200px;border-radius:10px;position:relative">
                <ion-row>
                  <ion-col>
                    <center>  
                      <img src="../assets/user.png" alt="" style="width:80px;height:80px">
                      <h4 style="text-transform:capitalize;color:#fff;font-weight:bold;margin-top:0;margin-bottom:0"><strong>Hi, {{dataUser.username}}</strong></h4>
                    </center>
                    
                  </ion-col>
                </ion-row>

                <ion-row>
                  <ion-col>
                    <h5 style="margin-top:0;margin-bottom:0;color:#fff;text-align:center;">Total Anggaran Kelurahan {{dataUser.kelurahan}} </h5>
                    <h5 style="margin-top:0;margin-bottom:0;color:#fff;text-align:center;">Tahun {{new Date().getFullYear()+1}} Sebesar Rp {{formatPrice(jumlahAnggaran)}},-</h5>
                  </ion-col>
                </ion-row>

                <ion-button color="danger" size="small"  @click="logout" style="position:absolute;top:10px;right:10px">Logout</ion-button>
              </div>
            </ion-col>
            
           
          </ion-row>
        </ion-grid>
        <ion-grid style="position:absolute;left:0;right:0;bottom:-50px;">
          <ion-row>
            <ion-col>
              <div style="background-color:#fff;border-radius:10px;box-shadow:0 7px 20px 0 rgba(0,0,0,.2)">
                <ion-row>
                  <ion-col style="padding-right:0;">
                    <div @click="goDataUsulan" style="width:100%;height:70px;background-color:;display:flex;flex-direction:column;justify-content:center;align-items:center;border-right:1px solid #e0e0e0">
                      <img src="../assets/list.png" alt="" style="width:30px">
                      <h6 style="margin-top:10px;margin-bottom:0;font-weight:bold"><strong>Data Usulan </strong></h6>
                    </div>
                  </ion-col>

                  <ion-col style="padding-left:0">
                    <div @click="goDataTertunda" style="width:100%;height:70px;background-color:;display:flex;flex-direction:column;justify-content:center;align-items:center;border-left:1px solid #e0e0e0">
                      <img src="../assets/list.png" alt="" style="width:30px">
                      <h6 style="margin-top:10px;margin-bottom:0;font-weight:900"><strong>Usulan Tertunda</strong></h6>
                    </div>
                  </ion-col>
                </ion-row>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <ion-grid style="margin-top:60px">
        <ion-row>
          <ion-col>
            <div style="width:100%;padding:30px 15px;box-shadow:0 7px 20px 0 rgba(0,0,0,.2);border-radius:10px">
              <h4 style="margin-top:0;margin-bottom:0;text-align:center">PROGRES KEGIATAN TAHUN {{new Date().getFullYear()+1}}</h4>

              <div style="width:100%;height:20px;background-color:#e0e0e0;border-top-left-radius: 10px;border-bottom-left-radius: 10px;border-top-right-radius: 10px;border-bottom-right-radius: 10px;margin-top:15px;position:relative;">
                <div :style="{width: (totalApproval*100)/totalKegiatan+'%' }" style="height:20px;background-color:#1200d9;border-top-left-radius: 10px;border-bottom-left-radius: 10px;border-top-right-radius: 10px;border-bottom-right-radius: 10px;overflow:hidden">
                  <div style="position:relative">
                    <div style="position:absolute;right:0;bottom:0;top:0;margin:auto;color:#fff;padding-left:5px;padding-right:5px;">
                      <h6 style="margin-top:2.5px;margin-bottom:0;font-size:14px"><strong>{{((totalApproval*100)/totalKegiatan).toFixed(2)}}%</strong></h6>
                    </div>
                  </div>
                </div>

                <div style="position:absolute;left:0;background-color:#fff">
                  <h6 style="margin-top:0;margin-bottom:0;"><strong>0%</strong></h6>
                </div>

                

                <div style="position:absolute;right:0;background-color:#fff">
                  <h6 style="margin-top:0;margin-bottom:0;"><strong>100%</strong></h6>
                </div>
              </div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
     
    </ion-content>
  </ion-page>
</template>

<script >
import { IonPage, IonContent, IonCol, IonGrid, IonRow, alertController, IonButton  } from '@ionic/vue';
// import doughnutChart from '../components/doughnutChart.vue';
import { Plugins } from '@capacitor/core';
// import { AppMinimize } from '@ionic-native/app-minimize';
const { Storage, StatusBar  } = Plugins;
import axios from 'axios';

// set status bar to white


export default  {
  name: 'Tab1',
  components: { IonContent, IonPage, IonCol, IonGrid, IonRow, IonButton },
  // setup() {
    
  //   useBackButton(-1, () => {
  //    AppMinimize.minimize();
  //   });
  // },
data(){
     

    return{
       srcc : '../assets/Fauzan.jpg',
       dataUser: {},
       jumlahAnggaran: 0,
       totalApproval:0,
       totalKegiatan:0
    }
   
  },
  async created(){
    
    StatusBar.setBackgroundColor({color:'#2fafd5'});
    const ret = await Storage.get({ key: 'token' });
    this.dataUser = JSON.parse(ret.value);
    let thn = new Date().getFullYear()+1;
      let jumlahanggaran = await   axios.get(this.$ipBackend+'/kegiatan/jumlahanggaran/'+thn+'/'+this.dataUser.kelurahan)
               this.jumlahAnggaran = jumlahanggaran.data[0].totalAnggaran

        let totalApprovall = await   axios.get(this.$ipBackend+'/kegiatan/totalapproval/'+thn+'/'+this.dataUser.kelurahan)
               this.totalApproval = totalApprovall.data[0].totalApproval
       let totalKegiatann = await   axios.get(this.$ipBackend+'/kegiatan/totalkegiatan/'+thn+'/'+this.dataUser.kelurahan)
               this.totalKegiatan = totalKegiatann.data[0].totalKegiatan
               console.log((this.totalApproval*100)/this.totalKegiatan)
  },
  methods:{
    goDataUsulan(){
        this.$router.push('/tabs/tab2')
    },
      goDataTertunda(){
        this.$router.push('/tabs/tab3')
    },
      formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
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
  /* background-color: yellow; */
  background-image: url(../assets/bg.png);
  background-size: cover;
  height: 260px;
  position: relative;
}

</style>