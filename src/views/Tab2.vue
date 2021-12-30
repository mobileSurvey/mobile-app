<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
         
        <ion-title v-if="user.role=='Surveyor'">Data Usulan Kel {{user.kelurahan}}</ion-title>
        <ion-title v-else>Data Usulan {{user.username}}</ion-title>
          
   
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
       <ion-fab vertical="bottom" v-if="user.role=='Dewan' && openTambah" horizontal="end" slot="fixed">
      <ion-fab-button @click="$router.push('/forminput')">Tambah</ion-fab-button>
    </ion-fab>
      <ion-item>
          <ion-label>Tahun</ion-label>
          <ion-select  :value="tahun" @ionChange="gantiTahun($event.target)">
            <ion-select-option v-for="x in 50" :key="x">{{x+2019}}</ion-select-option>
      
          </ion-select>
        </ion-item>
          <ion-item>
           <ion-button @click="refresh()" color="success">Refresh</ion-button>
         <ion-button @click="loadData()" style="margin-left:180px;" color="tertiary">Sinkronisasi</ion-button>
        </ion-item>
         <ion-progress-bar color="primary" :value="persen"></ion-progress-bar>
        <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
      <ion-refresher-content>
  
      </ion-refresher-content>
    </ion-refresher>
       <div v-if="datane.length>0">
     

    
      <ion-list>
           
        <ion-item @click="$router.push('/form/'+item.id)"  v-for="item in datane" :key="item.id">
      
          <ion-avatar slot="start">
            <!-- <img src="../assets/list.png"> -->
             <ion-icon :icon="hammerSharp"  style="color: rgb(255, 187, 0); font-size: 45px;" />
          </ion-avatar>
          <ion-label>
            <h3><strong>{{item.kegiatanPrioritas}}</strong></h3>
            <h3>{{item.alamat}}</h3>
            <p>Kelurahan: {{item.kel}}</p>
            <p>Anggaran: {{formatPrice(item.jumlahAnggaran)}}</p>
            <p>Status: <label style="color: green;" v-if="item.tersurvey">Tersurvey</label><label style="color: red;" v-else>Belum Disurvey</label>  </p>
            
          </ion-label>
         <ion-icon :icon="checkmarkCircleSharp" style="color:green;font-size: 30px;" v-if="item.approval==1"></ion-icon>
          <ion-icon :icon="closeCircleSharp" style="color:red;font-size: 30px;" v-if="item.approval==2"></ion-icon>
        </ion-item>
     
      </ion-list>

       </div>

       <div v-else>


    <ion-list>
     
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
        <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
        <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
        <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
        <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
        <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
        <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
        <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
        <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
        <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
        <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
     
  
    </ion-list>
  </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonFab, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonRefresher, IonRefresherContent, IonAvatar, IonLabel, IonItem,IonSelectOption,   IonSkeletonText, IonSelect, IonIcon, alertController ,IonProgressBar, IonFabButton   } from '@ionic/vue';
import axios from 'axios';
 import { useRouter } from 'vue-router';
import { Plugins } from '@capacitor/core';
import { hammerSharp, checkmarkCircleSharp,closeCircleSharp } from 'ionicons/icons';
const { Storage } = Plugins;


export default  {
  name: 'Tab2',
  components: {IonFab, IonFabButton, IonButton, IonProgressBar , IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonRefresher, IonRefresherContent, IonAvatar, IonLabel, IonItem,IonSelectOption,   IonSkeletonText, IonSelect, IonIcon  },
  data(){
    return {
      datane: [],
      tahun: '2021',
      user: {},
      persen: 0.00,
      openTambah: true
    }
  },
   setup() {
      const router = useRouter();
     
      return { router, hammerSharp,checkmarkCircleSharp, closeCircleSharp };
    },
  async created(){
   
    let vm = this;
     let hsl = await   axios.get(vm.$ipBackend+'/waktu/checkWaktuDewan');
    //  console.log(hsl.data.message);
     vm.openTambah = hsl.data.message

      let ret = await Storage.get({ key: 'token' });
                vm.user = JSON.parse(ret.value);
                    var tahunnya = await Storage.get({ key: 'tahun' });
                tahunnya = JSON.parse(tahunnya.value);
                // console.log(tahunnya, 'tahunnya');
                
  var d = new Date();
  if(!tahunnya){

    tahunnya = d.getFullYear()+1;
  }
  vm.tahun = tahunnya.toString();
  let keg = await Storage.get({ key: 'kegiatan' });
  console.log(keg)
  if(keg.value){
    vm.refresh()
  }else{
    vm.loadData()
  }
  
      
  },
  methods:{
      formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
   async loadData(){
         let vm = this;
   
          const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Perhatian!',
          message: 'Apakah anda yakin akan melakukan sinkronisasi?',
          buttons: [
            {
              text: 'Tidak',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                console.log('Confirm Cancel:', blah)
              },
            },
            {
              text: 'Ya',
              handler: async () => {
                    let jenis = await   axios.get(vm.$ipBackend+'/jenis/listforapp')
             await Storage.set({
                    key: 'jenis',
                    value: JSON.stringify(jenis.data.respon)
                });
  

 
          let sshe = await   axios.get(vm.$ipBackend+'/ssh/jsonSSH')
    
             await Storage.set({
                    key: 'ssh',
                    value: JSON.stringify(sshe.data)
                });

                vm.datane = []
             console.log(vm.user);
             let ur = vm.$ipBackend+'/kegiatan/listforappdewan/'+vm.tahun+'/'+vm.user.dewanId
             if(vm.user.role=='Surveyor'){
               ur = vm.$ipBackend+'/kegiatan/listforapp/'+vm.tahun+'/'+vm.user.kelurahan
             }
             axios.get(ur, {
              onDownloadProgress: (progressEvent) => {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              vm.persen =percentCompleted/100
              
              }
            })
              .then(async function (response) {
               vm.persen = 0.00;
                 if(Array.isArray(response.data.respon)){
                     await Storage.set({
                    key: 'kegiatan',
                    value: JSON.stringify(response.data.respon)
                });
                    let keg= await Storage.get({ key: 'kegiatan' });
                  
                    keg.value = JSON.parse(keg.value)
                    
                    keg.value.forEach((element,ind) => {
                      keg.value[ind].foto1="";
                      keg.value[ind].foto2="";
                      keg.value[ind].foto3="";
                    });
                    vm.datane = keg.value
                }
               
              })
              .catch(function (error) {
                   console.log(error)
              });
              },
            },
          ],
        });
      return alert.present();

     
    },
    async refresh(e){
       let vm = this;
       vm.datane =[]
       let keg= await Storage.get({ key: 'kegiatan' });
                      keg.value = JSON.parse(keg.value)
                    
                    keg.value.forEach((element,ind) => {
                      keg.value[ind].foto1="";
                      keg.value[ind].foto2="";
                      keg.value[ind].foto3="";
                    });
                    vm.datane = keg.value
       if(e){
           e.target.complete();
       }
      
    },
    gantiTahun(e){
      this.tahun = e.value;
       Storage.set({
                    key: 'tahun',
                    value: e.value
                })
      this.loadData();
    }
  }
}
</script>
<style scoped>
 .custom-skeleton ion-skeleton-text {
    line-height: 13px;
  }

  .custom-skeleton ion-skeleton-text:last-child {
    margin-bottom: 5px;
  }
  .my-custom-class .alert-wrapper {
  background: #e5e5e5;
}
</style>