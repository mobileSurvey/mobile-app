<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
         
        <ion-title>Data Usulan Kel {{user.kelurahan}}</ion-title>
          <ion-item>
          <ion-label>Tahun</ion-label>
          <ion-select  :value="tahun" @ionChange="gantiTahun($event.target)">
            <ion-select-option v-for="x in 50" :key="x">{{x+2019}}</ion-select-option>
      
          </ion-select>
        </ion-item>
   
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
      <ion-refresher-content>
  
      </ion-refresher-content>
    </ion-refresher>
       <div v-if="datane.length>0">
     

    
      <ion-list>
           
        <ion-item @click="$router.push('/form/'+item.id)"  v-for="item in datane" :key="item.id">
      
          <ion-avatar slot="start">
            <img src="../assets/list.png">
          </ion-avatar>
          <ion-label>
            <h3><strong>{{item.kegiatanPrioritas}}</strong></h3>
            <h3>{{item.alamat}}</h3>
            <p>Kelurahan: {{item.kel}}</p>
            <p>Anggaran: {{item.alokasiDanaKelurahan}}</p>
          </ion-label>
         
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonRefresher, IonRefresherContent, IonAvatar, IonLabel, IonItem,   IonSkeletonText, IonSelect  } from '@ionic/vue';
import axios from 'axios';
 import { useRouter } from 'vue-router';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


export default  {
  name: 'Tab2',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonRefresher, IonRefresherContent, IonAvatar, IonLabel, IonItem,   IonSkeletonText, IonSelect  },
  data(){
    return {
      datane: [],
      tahun: '2021',
      user: {}
    }
  },
   setup() {
      const router = useRouter();
     
      return { router };
    },
  async created(){
   
    let vm = this;
  var d = new Date();
  var tahunnya = d.getFullYear()+1;
  vm.tahun = tahunnya.toString();
  vm.loadData()
      
  },
  methods:{
   async loadData(){
         let vm = this;
       let ret = await Storage.get({ key: 'token' });
                vm.user = JSON.parse(ret.value);
        axios.post(vm.$ipBackend+'/kegiatan/listforapp/'+vm.tahun+'/'+vm.user.kelurahan)
              .then(async function (response) {
                console.log(response.data.respon)
                 if(Array.isArray(response.data.respon)){
                    vm.datane= response.data.respon
                }
               
              })
              .catch(function (error) {
                   console.log(error)
              });
    },
    refresh(e){
       let vm = this;
        axios.post(vm.$ipBackend+'/kegiatan/listforapp/'+vm.tahun+'/'+vm.user.kelurahan)
              .then(async function (response) {
                console.log(response)
                 vm.datane = response.data.respon
                 e.target.complete();
              })
              .catch(function (error) {
                   console.log(error)
                     e.target.complete();
              });
    },
    gantiTahun(e){
      this.tahun = e.value;
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
</style>