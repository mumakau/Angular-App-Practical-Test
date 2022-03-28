import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { PostauthServiceService } from 'src/app/services/postauth-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 latitude
 longitude
geoCoder
address: string
autheticated:boolean=false

constructor(private mapsAPILoader: MapsAPILoader, public postauth:PostauthServiceService) {

}

ngOnInit(): void {
 this.mapsAPILoader.load().then(() => {
   this.setCurrentLocation();
   this.geoCoder = new google.maps.Geocoder;
 });
 this.autheticated=this.postauth.currentUser.autheticated
}




setCurrentLocation() {
 if ('geolocation' in navigator) {
   navigator.geolocation.getCurrentPosition((position) => {
     this.latitude = position.coords.latitude;
     this.longitude = position.coords.longitude;
     this.getAddress(this.latitude, this.longitude);
   });
 }
}

getAddress(latitude, longitude) {
 this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
   if (status === 'OK') {
     if (results[0]) {

       this.address = results[0].formatted_address;
       console.log(this.address)
     } else {
       window.alert('No results found');
     }
   } else {
     window.alert('Geocoder failed due to: ' + status);
   }

 });
}

}
