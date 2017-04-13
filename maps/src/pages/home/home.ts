import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  latitude: number = 4.455;
  longitude: number = -75.036;
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.watch();
  }

    watch() {
    this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((resp) => {
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});
  }

}
