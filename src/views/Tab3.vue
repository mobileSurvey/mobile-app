<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Usulan</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="box">
      <div style="width:100%;height:200px;background-color:red"></div>
      
      <ion-item>
        <ion-label position="floating">Kegiatan</ion-label>
        <ion-input type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Lokasi</ion-label>
        <ion-input type="text"></ion-input>
      </ion-item>

       <ion-item>
          <ion-label>Kecamatan</ion-label>
          <ion-select value="kec">
            <ion-select-option value="">Kec A</ion-select-option>
            <ion-select-option value="">Kec B</ion-select-option>
          </ion-select>
        </ion-item>

       <ion-item>
          <ion-label>Kelurahan</ion-label>
          <ion-select value="kel">
            <ion-select-option value="">Kel A</ion-select-option>
            <ion-select-option value="">Kel B</ion-select-option>
          </ion-select>
        </ion-item>

      <ion-item>
        <ion-label position="floating">Volume</ion-label>
        <ion-input type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">APBD</ion-label>
        <ion-input type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Alokasi Dana Kelurahan (DAUT/APBN)</ion-label>
        <ion-input type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Alokasi Dana Kelurahan (APBD)</ion-label>
        <ion-input type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Pelaksana</ion-label>
        <ion-input type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Kesesuaian Dengan PERWALI</ion-label>
        <ion-input type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Keterangan</ion-label>
        <ion-textarea></ion-textarea>
      </ion-item>
       <ion-button expand="block" style="margin-top:30px">Simpan</ion-button>  
      
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>

<style scoped>
.box{
  padding: 30px 15px;
}

</style>