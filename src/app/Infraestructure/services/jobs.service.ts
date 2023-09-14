import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Jobs } from 'src/app/Domain/interfaces/jobs.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient) {}

  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(`${environment.urlApi}/assets/data/data.json`);
  }
}
