<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Usulan Belum Terupload</ion-title>
      </ion-toolbar>
    </ion-header>
       <ion-content :fullscreen="true">
           <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
      <ion-refresher-content>
  
      </ion-refresher-content>
    </ion-refresher>
       <div v-if="loaded">
    

    
      <ion-list v-if="datane.length>0">
           
        <ion-item  v-for="(item, i) in datane" :key="item.id">
      
          <ion-avatar slot="start">
            <!-- <img src="../assets/list.png"> -->
              <ion-icon :icon="cloudOfflineSharp"  style="color: #2fafd5; font-size: 45px;" />
          </ion-avatar>
          <ion-label>
            <h3><strong>{{item.kegiatanPrioritas}}</strong></h3>
            <h3>{{item.alamat}}</h3>
            <p>Kelurahan: {{item.kel}}</p>
            <p>Anggaran: {{formatPrice(item.jumlahAnggaran)}}</p>
          </ion-label>
         <ion-icon :icon="cloudCircleOutline" style="color:#4287f5;font-size: 30px;"  @click="upload(item, i)"></ion-icon>
         <ion-icon :icon="trashOutline" style="color:red;font-size: 30px;" @click="hapus(i)"></ion-icon>

        </ion-item>
      </ion-list>
       <ExploreContainer name="Tidak Ada Data" v-else />
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonRefresher, IonRefresherContent, IonSkeletonText, IonIcon, IonAvatar, IonItem, IonLabel, IonList,loadingController, alertController } from '@ionic/vue';
import { Plugins } from '@capacitor/core';
 import { cloudCircleOutline, trashOutline } from "ionicons/icons";
 import axios from 'axios';
 import { useRouter } from 'vue-router';
import ExploreContainer from '@/components/ExploreContainer.vue';
const { Network, Storage } = Plugins;
import { cloudOfflineSharp } from 'ionicons/icons';

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle,IonRefresher, IonRefresherContent, IonContent, IonPage, IonSkeletonText,IonIcon,IonAvatar, IonItem, IonLabel,  IonList, ExploreContainer  },
    data(){
    return {
      datane: [],
      loaded: false
    }
  },
  setup(){
     const router = useRouter();
    return {cloudCircleOutline, trashOutline, router, cloudOfflineSharp}
  },
  async created(){
    this.loadData();
  },
  methods:{
     async refresh(e){
      this.loadData();
        e.target.complete();
    },
    async loadData(){
     
        let vm = this
          vm.loaded = false
        let ret = await Storage.get({ key: 'datane' });
                let datanya = JSON.parse(ret.value);
         
                if(Array.isArray(datanya)){
                    vm.datane=datanya;   
                       
                }
                vm.loaded = true
    },
      async upload(item, i){
          let status = await Network.getStatus();
          console.log(status)
      let loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: 'Mohon Tunggu...',
        });

      await loading.present();
          let vm = this;
          if(status.connected){
               axios.post(vm.$ipBackend+'/kegiatan/update/'+item.id, item)
              .then(async function (response) {
                console.log(response)
                   vm.datane.splice(i, 1);
               
                await Storage.set({
                    key: 'datane',
                    value: JSON.stringify(vm.datane)
                });
                  loading.dismiss()
                vm.router.push('/tabs/tab3')
              })
              .catch(function (error) {
                   console.log(error)
                      loading.dismiss()
                       vm.router.push('/tabs/tab3')
              });
          }else{
            
                 loading.dismiss()

      const alert = await alertController
        .create({
          header: 'Perhatian',
        //   subHeader: 'Perhatian',
          message: 'Internet tidak ditemukan',
          buttons: [ {
              text: 'Ya',
              handler: () => {
                 vm.router.push('/tabs/tab3')
              },
            },],
        });
      return alert.present();


          }
       
      },
      async hapus(id){
              let vm = this;
        vm.datane.splice(id, 1);
               
                await Storage.set({
                    key: 'datane',
                    value: JSON.stringify(vm.datane)
                });
      },
         formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>

<style scoped>
.box{
  padding: 30px 15px;
}

</style>