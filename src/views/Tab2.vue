<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Data Usulan</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          
          <ion-avatar slot="start">
            <img src="../assets/list.png">
          </ion-avatar>
          <ion-label>
            <h2><strong>Pembangunan Jembatan dan Peninggian Jalan</strong></h2>
            <h3>Jalan Usaha Tani RW. III</h3>
            <p>Kelurahan Kutowinangun Lor</p>
          </ion-label>
          
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="../assets/list.png">
          </ion-avatar>
          <ion-label>
            <h2><strong>Pembangunan Talud</strong></h2>
            <h3>Jalan Perngsari RT.12 RW. II</h3>
            <p>Kelurahan Kutowinangun Lor</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="../assets/list.png">
          </ion-avatar>
          <ion-label>
            <h2><strong>Pembangunan Talud</strong></h2>
            <h3>Jalan Perngsari RT.12 RW. II</h3>
            <p>Kelurahan Kutowinangun Lor</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="../assets/list.png">
          </ion-avatar>
          <ion-label>
            <h2><strong>Pengadaan LPJU</strong></h2>
            <h3>Jalan Sonotirto</h3>
            <p>Kelurahan Kutowinangun Lor</p>
          </ion-label>
        </ion-item>
      </ion-list>

      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


export default  {
  name: 'Tab2',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>