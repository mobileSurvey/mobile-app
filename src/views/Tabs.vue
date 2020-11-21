<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="homeSharp" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="listCircle" />
          <ion-label>Data Usulan</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="listCircle" />
          <ion-label>Usulan Tertunda</ion-label>
        </ion-tab-button>
         <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="statsChart" />
          <ion-label>Tab 4</ion-label>
        </ion-tab-button>
      
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { listCircle, statsChart, homeSharp } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      listCircle, 
      statsChart, 
   
      homeSharp
    }
  }
}
</script>