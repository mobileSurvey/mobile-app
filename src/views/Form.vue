<template>
  <ion-page>
 
    <ion-content :fullscreen="true" style="">
     
      <div style="width:100%;height:300px;background-color:;position:relative">
        <ion-buttons slot="start" style="position:absolute;top:10px;left:10px;z-index:1000">
        <ion-back-button defaultHref="/tabs/tab2" style="color:#fff;font-weight:bold" :text="'Kembali'"></ion-back-button>
 
         </ion-buttons>
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
          <ion-select value="" v-model="datane.kec" @ionChange="gantiKec($event)">
            <ion-select-option v-for="item in kec" :key="item.id_kecamatan">{{item.nama_kecamatan}}</ion-select-option>
           
          </ion-select>
        </ion-item>

       <ion-item >
          <ion-label>Kelurahan</ion-label>
          <ion-select value="" v-model="datane.kel" >
             <ion-select-option v-for="item in kel" :key="item.id_kelurahan">{{item.nama_kelurahan}}</ion-select-option>
          </ion-select>
        </ion-item>

             <ion-item >
          <ion-label>SSH</ion-label>
          <ion-select value=""  v-model="datane.sshId" @ionChange="gantiSsh($event)">
             <ion-select-option class="select-full-width"  v-for="item in ssh" :key="item.id" :value="item.id" >{{item.nama}}</ion-select-option>
          </ion-select>
        </ion-item>
         <ion-item>
        <ion-label position="floating">Untuk panjang,lebar,tinggi dan volume diisi dengan angka</ion-label>
      <ion-label position="floating">dan isi dengan angka 0 apabila tidak ada</ion-label>
  
     
      </ion-item>
      <ion-item>
        <ion-label position="floating">Panjang (m)</ion-label>
        <ion-input type="number" v-model="datane.panjang" @ionInput="gantiPanjang($event)"></ion-input>
      </ion-item>
        <ion-item>
        <ion-label position="floating">Lebar (m)</ion-label>
        <ion-input type="number" v-model="datane.lebar" @ionInput="gantiLebar($event)" :placeholder="0"></ion-input>
      </ion-item>
        <ion-item>
        <ion-label position="floating">Tinggi (m)</ion-label>
        <ion-input type="number" v-model="datane.tinggi" @ionInput="gantiTinggi($event)" :placeholder="0"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Volume</ion-label>
        <ion-input type="number" v-model="datane.volume" @ionInput="gantiVolume($event)" :placeholder="0"></ion-input>
      </ion-item>
       <ion-item>
        <ion-label position="floating">Satuan</ion-label>
        <ion-input type="text" v-model="datane.satuan"></ion-input>
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
        <ion-input type="number" v-model="datane.jumlahAnggaran" :placeholder="0"></ion-input>
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

   
     
       <ion-button expand="block" style="margin-top:30px" @click="simpan" v-if="datane.approval==0">Simpan</ion-button>  
      
      </div>
    </ion-content>
    
  </ion-page>
</template>

<script lang="ts">
import { IonPage, 
 
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
  components: {  IonPage,  IonContent, IonButton, IonItem, IonTextarea, IonLabel, IonBackButton, IonSelectOption, IonInput, IonSelect, IonButtons, Gmap  },
   data(){
    return {
      datane: {},
      kec:[],
      kel:[],
      jenis:[],
       ssh:[],
       hargaDipilih: 0,
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
          duration: 10000,
        });

      await loading.present();
        let kecamatan = await Storage.get({ key: 'kecamatan' });
               vm.kec = JSON.parse(kecamatan.value)
         let kelurahan =  await Storage.get({ key: 'kelurahan' });
               let seluruhKel = JSON.parse(kelurahan.value)
            
          let jenis = await Storage.get({ key: 'jenis' });
             vm.jenis = JSON.parse(jenis.value)
            
             let ssh = await Storage.get({ key: 'ssh' });
             vm.ssh = JSON.parse(ssh.value)
            
          


      let kegiatan = await Storage.get({ key: 'kegiatan' });
            let kegiatanJson = JSON.parse(kegiatan.value)


          kegiatanJson.forEach(function(itm){
            if(itm.id == vm.$route.params.id){
               vm.datane = itm
                  console.log(vm.datane)
                   vm.datane.kesesuaian =   vm.datane.kesesuaian.toString()
             
                 if(itm.SHAPE){
                     vm.datane.xe = itm.SHAPE.coordinates[0]
                      vm.datane.ye = itm.SHAPE.coordinates[1]
                      vm.center = { lat: itm.SHAPE.coordinates[1], lng: itm.SHAPE.coordinates[0]}
                 }
                 vm.mapShow = true;
                 loading.dismiss()

                if(vm.datane.kec){
                  let tampung = []
                  seluruhKel.forEach(function(itmm){
                    if(itmm.kec == vm.datane.kec){
                      tampung.push(itmm)
                    }
                  })
                  vm.kel = tampung;
                }
            }
               
          })
          
               
                
    loading.dismiss()

           

             
             
  },
  methods:{
        formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
      hitungVolume(){
    
        let vm = this;
          
           let v = 0
      if(vm.datane.tinggi!='0'){
         v =  vm.datane.panjang * vm.datane.lebar * vm.datane.tinggi
         vm.datane.satuan = 'm3'
      }else{
         v =  vm.datane.panjang * vm.datane.lebar
          vm.datane.satuan = 'm2'
      }
     
      if(vm.datane.sshId){
        vm.ssh.forEach(function(itm){
          if(itm.id==vm.datane.sshId){
            vm.datane.jumlahAnggaran = v * itm.harga;
            // vm.datane.satuan = itm.satuan
          }
        })
      }

      
     vm.datane.volume = v.toFixed(2)
    
      },
      gantiPanjang(e){
        this.datane.panjang = e.target.value;
        this.hitungVolume();
      },
      gantiLebar(e){
         this.datane.lebar = e.target.value;
        this.hitungVolume();
      },
      gantiTinggi(e){
         this.datane.tinggi = e.target.value;
        this.hitungVolume();
      },
      gantiVolume(e){
        let vm = this;
         this.datane.volume = e.target.value;
         if(vm.datane.sshId){
        vm.ssh.forEach(function(itm){
          if(itm.id==vm.datane.sshId){
            vm.datane.jumlahAnggaran = vm.datane.volume * itm.harga;
            // vm.datane.satuan = itm.satuan
          }
        })
      }
      },
      gantiSsh(e){
         let vm = this;
          if(e.target.value){
              vm.ssh.forEach(function(itm){
              if(itm.id==e.target.value){
                vm.datane.sshId = itm.id
                vm.hitungVolume();
              }
            })
          }
      },
      async simpan(){
           let vm = this;
             let kegiatan = await Storage.get({ key: 'kegiatan' });
            let kegiatanJson = JSON.parse(kegiatan.value)
            kegiatanJson.forEach(function(itm,idxx){
            if(itm.id == vm.$route.params.id){
              kegiatanJson[idxx] = vm.datane;
                  kegiatanJson[idxx].SHAPE = {
                         coordinates : []
                       }
                      kegiatanJson[idxx].SHAPE.coordinates[0] =  vm.datane.xe
                       kegiatanJson[idxx].SHAPE.coordinates[1] =  vm.datane.ye
            }
          })

           await Storage.set({
                    key: 'kegiatan',
                    value: JSON.stringify(kegiatanJson)
                });

          let status = await Network.getStatus();
          console.log(status)
      let loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: 'Mohon Tunggu...',
        });

      await loading.present();
       
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
                let rett = await Storage.get({ key: 'datane' });
                let datanya = JSON.parse(rett.value);
                 console.log(datanya)
                if(!datanya){
                    datanya = []
                         let t = vm.datane
                  t.SHAPE.coordinates[0] =  vm.datane.xe
                       t.SHAPE.coordinates[1] =  vm.datane.ye
                        datanya.push(t);
                }else{
                  let fg = 0
                    datanya.forEach(function(itm, idx){
                  if(itm.id== vm.datane.id){
                    fg =1;
                      datanya[idx] = vm.datane;
                   
                      datanya[idx].SHAPE.coordinates[0] =  vm.datane.xe
                       datanya[idx].SHAPE.coordinates[1] =  vm.datane.ye
                  }
                })
                if(fg==0){
                  let t = vm.datane
                  t.SHAPE.coordinates[0] =  vm.datane.xe
                       t.SHAPE.coordinates[1] =  vm.datane.ye
                        datanya.push(t);
                }
                }
          
               
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

    async gantiKec(e){
        
          let vm = this
             let kelurahan =  await Storage.get({ key: 'kelurahan' });
               let seluruhKel = JSON.parse(kelurahan.value)
            
            let tampung = []
                  seluruhKel.forEach(function(itmm){
                    if(itmm.kec == e.target.value){
                      tampung.push(itmm)
                    }
                  })
                  vm.kel = tampung;
              
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
.select-full-width {
  max-width: 100% !important;
  width: 100% !important;
  padding-left: 0 !important;
}
</style>