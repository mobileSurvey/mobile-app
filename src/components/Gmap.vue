<script>
/* global google */
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

export default {
  props: {
    center: {
      type: Object,
    },
    mapType: {
      type: String,
    },
    zoom: {
      type: Number,
    },
    clickActive: {
      type: Boolean,
      default: false,
    },
    getLatLng: {
      type: Boolean,
      default: false,
    },
    moveActive: {
      type: Boolean,
      default: false,
    },
    markers: {
      type: Array,
    },
    polylines: {
      type: Object,
    },
  },
  inject: ["apiKey", "tileUrl", "layerId"],
  created() {

  },
  watch: {
    center: async function (val) {
      if (this.map == null) {
      // //    this.map = new google.maps.Map(document.getElementById("map"), {
      // //   center: this.center,
      // //   zoom: this.zoom,
      // //   mapTypeId: this.mapType,
      // // }
      // );
      } else {
        this.map.setCenter(new google.maps.LatLng(val.lat, val.lng));
          let coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates.coords.latitude, coordinates.coords.longitude);
       this.map.panTo(new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude));
        this.map.setZoom(17);
       
      }
    },
  },
  data() {
    return {
      map: null,
    };
  },
  methods:{
    inisialisasiMap(){
    //       const googleMapScript = document.createElement("SCRIPT");
    // googleMapScript.setAttribute(
    //   "src",
    //   `https://maps.googleapis.com/maps/api/js?key=AIzaSyA6hlb5UYJmQ9mctsn_p6D6ZbriORkikiY&libraries=&v=weekly&sensor=true`
    // );
    // googleMapScript.setAttribute("defer", "");
    // googleMapScript.setAttribute("async", "");
    // document.head.appendChild(googleMapScript);
         // let map = this.map;
    // window.addEventListener("load", async () => {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: this.center,
        zoom: this.zoom,
        mapTypeId: this.mapType,
      });

// posisi sekarang
     window.setTimeout(async () => {
         let coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates.coords.latitude, coordinates.coords.longitude);
       this.map.panTo(new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude));
        this.map.setZoom(17);
      let mark=   new google.maps.Marker({
            position: new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude),
             animation: google.maps.Animation.DROP,
            map: this.map
          });
          mark.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
    }, 1000);
      // if(coordinates){
        
      //  google.maps.event.trigger(this.map, 'resize');
      // }
  this.map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    
   
    console.log(this.map.getCenter().lat())

  });
    //   if(this.tileUrl && this.layerId){

                 var TILE_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        var layer = new google.maps.ImageMapType({
                name: 'ESRI',
                getTileUrl: function (coord, zoom) {
                    var url = TILE_URL
                        .replace('{x}', coord.x)
                        .replace('{y}', coord.y)
                        .replace('{z}', zoom);
                    return url;
                },
                tileSize: new google.maps.Size(256, 256),
                minZoom: 1,
                maxZoom: 20
            })

            this.map.mapTypes.set('ESRI', layer);
            this.map.setMapTypeId('ESRI');        
    //   }

 


      if (this.polylines != null) {
        var flightPath = new google.maps.Polyline({
          path: this.polylines.coords,
          geodesic: true,
          strokeColor: this.polylines.strokeColor,
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });
        flightPath.setMap(this.map);
      }

      if (this.clickActive) {
        if (this.getLatLng) {
          this.map.addListener("click", function (mapsMouseEvent) {
            console.log(mapsMouseEvent.latLng.toString());
          });
        }
      }

      if (this.moveActive) {
        this.map.addListener("mousemove", function (mapsMouseEvent) {
          console.log(mapsMouseEvent.latLng.toString());
        });
      }

      if (this.markers.length > 0) {
        this.markers.forEach((marker) => {
          console.log(marker);
          let mapMarker = new google.maps.Marker({
            position: new google.maps.LatLng(marker.lat, marker.lng),
            draggable: marker.draggable,
            map: this.map,
            title: marker.title,
          });

          if (marker.infoWindow != null) {
            var infowindow = new google.maps.InfoWindow({
              content: marker.infoWindow,
            });
          }

          if (this.clickActive) {
            mapMarker.addListener("click", function (mapEvent) {
              if (this.getLatLng) {
                console.log(mapEvent.latLng.toString());
              }
              if (marker.infoWindow != null) {
                infowindow.open(this.map, mapMarker);
              }
            });
          }
        });
      }
    // });
    }
  },
   mounted() {
  
   this.inisialisasiMap();
  },
};
</script>

<template>
  <div class="map" id="map"></div>
</template>
<style scoped>
#map {
  height: 100%;
}
</style>