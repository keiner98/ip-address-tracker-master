import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeoInfo } from 'src/app/Domain/interfaces/geo.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeoApiService {
  constructor(private http: HttpClient) {}

  getInfoGeo(location: string): Observable<GeoInfo> {
    let url = `${environment.urlApi}country,city,vpn?apiKey=${environment.apiKey}`;
    url = location.length > 0 ? `${url}&ipAddress=${location}` : url;
    return this.http.get<GeoInfo>(url);
  }
}
