<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
        <ion-back-button defaultHref="/tabs/tab2"></ion-back-button>
         </ion-buttons>
        <ion-title>Usulan</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
  
      <div style="width:100%;height:200px;background-color:red">
            <Gmap
    v-if="mapShow"
    :center="center"
    :zoom="14"
    :clickActive="true"
    :getLatLng="true"
    :mapType="'hybrid'"
    :moveActive="false"
    @ganti-center="ganticenter"
    :polylines="{
      strokeColor: '#FF0000',
      coords: [
       
      ],
    }"
    :markers="[
  
    ]"
  />
      </div>
<div class="box">
      <ion-item>
        <ion-label position="floating">Kegiatan</ion-label>
        <ion-input type="text" v-model="datane.kegiatanPrioritas"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Lokasi</ion-label>
        <ion-input type="text" v-model="datane.lokasi"></ion-input>
      </ion-item>
 <ion-item>
          <ion-label>Jenis Pekerjaan</ion-label>
          <ion-select  v-model="datane.jeniId" >
            <ion-select-option v-for="item in jenis" :key="item.id" :value="item.id">{{item.jenis}}</ion-select-option>
           
          </ion-select>
        </ion-item>
       <ion-item>
          <ion-label>Kecamatan</ion-label>
          <ion-select value="kec" v-model="datane.kec" @ionChange="gantiKec($event)">
            <ion-select-option v-for="item in kec" :key="item.id_kecamatan">{{item.nama_kecamatan}}</ion-select-option>
           
          </ion-select>
        </ion-item>

       <ion-item >
          <ion-label>Kelurahan</ion-label>
          <ion-select value="kel" v-model="datane.kel" >
             <ion-select-option v-for="item in kel" :key="item.id_kelurahan">{{item.nama_kelurahan}}</ion-select-option>
          </ion-select>
        </ion-item>

      <ion-item>
        <ion-label position="floating">Volume</ion-label>
        <ion-input type="text" v-model="datane.volume"></ion-input>
      </ion-item>
    <ion-item>
          <ion-label>Jenis Anggaran</ion-label>
          <ion-select  v-model="datane.jenisAnggaran">
            <ion-select-option value="APBD">APBD</ion-select-option>
            <ion-select-option value="DAUT">Alokasi Dana Kelurahan (DAUT/APBN)</ion-select-option>
              <ion-select-option value="APBDKEL">Alokasi Dana Kelurahan (APBD)</ion-select-option>
          </ion-select>
        </ion-item>
      <ion-item>
        <ion-label position="floating">Jumlah Anggaran</ion-label>
        <ion-input type="text" v-model="datane.jumlahAnggaran"></ion-input>
      </ion-item>

     
      <ion-item>
        <ion-label position="floating">Pelaksana</ion-label>
        <ion-input type="text" v-model="datane.pelaksana"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Kesesuaian Dengan PERWALI</ion-label>
    
         <ion-select  v-model="datane.kesesuaian">
            <ion-select-option value='1'>Ya</ion-select-option>
            <ion-select-option value='0'>Tidak</ion-select-option>
          </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Keterangan</ion-label>
        <ion-textarea v-model="datane.keterangan"></ion-textarea>
      </ion-item>
       <ion-item>
  
        <ion-button expand="block" style="margin-top:30px" @click="ambilGambar('foto1')">Foto 1</ion-button>  
           <img v-if="datane.foto1" :src="'data:image/jpeg;base64,'+datane.foto1" style="width:150px" @click="lihatFoto('data:image/jpeg;base64,'+datane.foto1)" />
       
      </ion-item>
       <ion-item>
   
             <ion-button expand="block" style="margin-top:30px" @click="ambilGambar('foto2')">Foto 2</ion-button>  
           <img v-if="datane.foto2" :src="'data:image/jpeg;base64,'+datane.foto2" style="width:150px"  @click="lihatFoto('data:image/jpeg;base64,'+datane.foto2)" />
     
         
      </ion-item>
       <ion-item>
     
              <ion-button expand="block" style="margin-top:30px" @click="ambilGambar('foto3')">Foto 3</ion-button>  
           <img v-if="datane.foto3" :src="'data:image/jpeg;base64,'+datane.foto3" style="width:150px"  @click="lihatFoto('data:image/jpeg;base64,'+datane.foto3)"  />
     
  
      </ion-item>

   
     
       <ion-button expand="block" style="margin-top:30px" @click="simpan">Simpan</ion-button>  
      
      </div>
    </ion-content>
    
  </ion-page>
</template>

<script lang="ts">
import { IonPage, 
IonHeader, 
IonToolbar, 
IonTitle, 
IonContent,
 IonButton,
  IonItem, 
  IonTextarea, 
  IonLabel,
   IonBackButton,
    IonSelectOption,
     IonInput, 
     IonSelect, 
     IonButtons, 
     loadingController,
     alertController   } from '@ionic/vue';
import Gmap from '../components/Gmap.vue';
import axios from 'axios';
 import { useRouter } from 'vue-router';
import { Plugins, CameraResultType ,CameraSource } from '@capacitor/core';
import { PhotoViewer } from '@ionic-native/photo-viewer';
const { Network, Storage, Camera, Toast  } = Plugins;


export default  {
  name: 'Form',
  components: {  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonTextarea, IonLabel, IonBackButton, IonSelectOption, IonInput, IonSelect, IonButtons, Gmap  },
   data(){
    return {
      datane: {},
      kec:[],
      kel:[],
      jenis:[],
      center : { lat: 0, lng: 0},
      mapShow: false
    }
  },
     setup() {
      const router = useRouter();
     
      return { router };
    },
  async created(){
      
    let vm = this;
          let loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: 'Mohon Tunggu...',
        });

      await loading.present();
        let kecamatan = await   axios.get(vm.$ipBackend+'/kegiatan/kec/')
               vm.kec = kecamatan.data
         let kelurahan = await   axios.get(vm.$ipBackend+'/kegiatan/kel/0')
               vm.kel = kelurahan.data
          let jenis = await   axios.get(vm.$ipBackend+'/jenis/listforapp')
             vm.jenis = jenis.data.respon
             console.log( vm.jenis)
        axios.post(vm.$ipBackend+'/kegiatan/list/'+this.$route.params.id)
              .then(async function (response) {
          
                 vm.datane = response.data.respon[0]
                //  console.log(vm.datane.foto1)
                   vm.datane.kesesuaian =   vm.datane.kesesuaian.toString()
                 console.log(vm.datane)
                 if(response.data.respon[0].SHAPE){
                     vm.datane.xe = response.data.respon[0].SHAPE.coordinates[0]
                      vm.datane.ye = response.data.respon[0].SHAPE.coordinates[1]
                      vm.center = { lat: response.data.respon[0].SHAPE.coordinates[1], lng: response.data.respon[0].SHAPE.coordinates[0]}
                 }
                 vm.mapShow = true;
                 loading.dismiss()

                if(vm.datane.kec){
                      axios.get(vm.$ipBackend+'/kegiatan/kel/'+vm.datane.kec)
                                    .then(function (responsee) {
                                        // console.log(responsee)
                                        vm.kel = responsee.data
                                    
                                    })
                }
                


              })
              .catch(function (error) {
                   console.log(error)
                   loading.dismiss()
              });

             
             
  },
  methods:{
      
      async simpan(){
          let status = await Network.getStatus();
          console.log(status)
      let loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: 'Mohon Tunggu...',
        });

      await loading.present();
          let vm = this;
           let ret = await Storage.get({ key: 'token' });
                let user = JSON.parse(ret.value);
          if(status.connected){
               axios.post(vm.$ipBackend+'/kegiatan/update/'+this.$route.params.id, vm.datane,{ headers:{
                 accesstoken: user.accesstoken
               }})
              .then(async function (response) {
                console.log(response)
                 await Toast.show({
                        text: 'Berhasil'
                      });
                  loading.dismiss()
                vm.router.push('/tabs/tab2')
              })
              .catch(async function (error) {
                   console.log(error)
                   await Toast.show({
                        text: error.message
                      });
                      loading.dismiss()
                       vm.router.push('/tabs/tab2')
              });
          }else{
            //   await Storage.remove({key: 'datane'})
                let ret = await Storage.get({ key: 'datane' });
                let datanya = JSON.parse(ret.value);
                 console.log(datanya)
                if(!datanya){
                    datanya = []
                }
                datanya.push(vm.datane);
               
                await Storage.set({
                    key: 'datane',
                    value: JSON.stringify(datanya)
                });
                 loading.dismiss()

      const alert = await alertController
        .create({
          header: 'Perhatian',
        //   subHeader: 'Perhatian',
          message: 'Internet tidak ditemukan, data disimpan dalam memory perangkat.',
          buttons: [ {
              text: 'Ya',
              handler: () => {
                 vm.router.push('/tabs/tab2')
              },
            },],
        });
      return alert.present();


          }
       
      },

     gantiKec(e){
        
          let vm = this

                 axios.get(vm.$ipBackend+'/kegiatan/kel/'+e.target.value)
              .then(async function (responsee) {
                // console.log(responsee)
                 vm.kel = responsee.data
             
              })
      },

        ganticenter(v){
        this.datane.xe = v.lng;
         this.datane.ye = v.lat;
      },
  
     async ambilGambar(jen){
         const cameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Base64 ,
      source: CameraSource.Prompt,
      promptLabelHeader: 'Pilih Aksi',
      promptLabelPhoto: 'Ambil Dari Gallery',
      promptLabelPicture: 'Ambil Dari Kamera',
      quality: 50,
      saveToGallery: true,
      allowEditing: false
    });
    if(jen=='foto1'){
      this.datane.foto1 = cameraPhoto.base64String
    
    }else if(jen=='foto2'){
      this.datane.foto2 = cameraPhoto.base64String
    }else if(jen=='foto3'){
      this.datane.foto3 = cameraPhoto.base64String
    }

      },
      lihatFoto(data){
        PhotoViewer.show(data,'Foto Lapangan', {share: true});
      }
  }
}
</script>

<style scoped>
.box{
  /* padding: 30px 15px; */
}

</style>