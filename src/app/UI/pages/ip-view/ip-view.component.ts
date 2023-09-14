import { Component } from '@angular/core';
import { Map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-ip-view',
  templateUrl: './ip-view.component.html',
  styleUrls: ['./ip-view.component.scss'],
})
export class IpViewComponent {
  address: string = '';
  constructor() {}

  ngAfterViewInit() {
    const map = new Map('map').setView([51.505, -0.09], 13);
    tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 30,
      }
    ).addTo(map);
  }

  search() {
    console.log(this.address);
  }
}
