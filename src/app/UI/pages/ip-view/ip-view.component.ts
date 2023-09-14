import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { IconOptions, Map, Marker, icon, marker, tileLayer } from 'leaflet';
import { ToastrService } from 'ngx-toastr';
import { GeoInfo } from 'src/app/Domain/interfaces/geo.interface';
import { GeoApiService } from 'src/app/Infraestructure/services/geo-api.service';

@Component({
  selector: 'app-ip-view',
  templateUrl: './ip-view.component.html',
  styleUrls: ['./ip-view.component.scss'],
})
export class IpViewComponent implements OnInit {
  form!: FormGroup;
  loading: boolean = true;
  activeToast = false;
  geoData: GeoInfo = {
    ip: '',
    location: {
      country: '',
      region: '',
      city: '',
      lat: 0,
      lng: 0,
      postalCode: '',
      timezone: '',
      geonameId: 0,
    },
    as: {
      asn: 0,
      name: '',
      route: '',
      domain: '',
      type: '',
    },
    isp: '',
    proxy: {
      proxy: false,
      vpn: false,
      tor: false,
    },
  };
  map!: Map;
  marketItem!: Marker<any>;

  constructor(
    private geoApi: GeoApiService,
    private fb: FormBuilder,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  ngAfterViewInit() {
    this.search();
    this.initMap();
  }

  initForm() {
    this.form = this.fb.group({
      ipAddress: [''],
    });
  }

  initMap() {
    this.map = new Map('map').setView([11.24079, -74.19904], 13);
    tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
      }
    ).addTo(this.map);
  }

  addMarket(lat: number, lng: number, city: string, country: string) {
    this.marketItem = marker([lat, lng], { icon: this.addIcon() })
      .addTo(this.map)
      .bindPopup(`${city}, ${country}`);
    this.addPropertiesMarket();
  }

  addPropertiesMarket() {
    this.marketItem.on('mouseover', () => {
      this.marketItem.togglePopup();
    });
    this.marketItem.on('mouseout', () => {
      this.marketItem.togglePopup();
    });
    this.map.fitBounds([
      [this.marketItem.getLatLng().lat, this.marketItem.getLatLng().lng],
    ]);
  }
  addIcon() {
    const optionsIcon: IconOptions = {
      iconUrl: '../../../../assets/images/icon-location.svg',
    };
    return icon(optionsIcon);
  }

  removeMarket() {
    if (this.marketItem) {
      this.map.removeLayer(this.marketItem);
    }
  }

  search() {
    this.loading = true;
    this.geoApi.getInfoGeo(this.form.value.ipAddress).subscribe(
      (data) => {
        this.geoData = data;
        this.loading = false;
        this.removeMarket();
        this.addMarket(
          this.geoData.location.lat,
          this.geoData.location.lng,
          this.geoData.location.city,
          this.geoData.location.country
        );
      },
      (error) => {
        this.toast.error('Invalid address', 'Error');
        this.loading = false;
      }
    );
  }
}
