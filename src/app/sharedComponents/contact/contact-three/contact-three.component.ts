import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact/contact.service';

declare var  L:any;

@Component({
  selector: 'app-contact-three',
  templateUrl: './contact-three.component.html',
  styles: []
})
export class ContactThreeComponent implements OnInit {

  myMap:any;

  constructor( public _cos:ContactService ) { }

  ngOnInit() {

    this.myMap = L.map('mapid', {
      center: this._cos.brand.mapCords,
      zoom: 16,
      scrollWheelZoom: false
    });

    this.initMap( this._cos.brand.mapCords )

  }

  initMap( cords ) {

    L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${this._cos.mapToken}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: `${this._cos.mapToken}`
    }).addTo( this.myMap );

    let marker = L.marker( cords ).addTo( this.myMap );

  }

}
