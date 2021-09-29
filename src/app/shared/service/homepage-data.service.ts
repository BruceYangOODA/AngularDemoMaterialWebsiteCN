import { Injectable } from '@angular/core';
import { HomepageData } from '../models/homepage.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomepageDataService {

  constructor(private http: HttpClient) { }

  getHompageFeaturedData() : Observable<Array<HomepageData>>{
    return this.http.get<Array<HomepageData>>('../../../assets/json/homepage/feature.json');
  }
  getHompageGuidesData() : Observable<Array<HomepageData>>{
    return this.http.get<Array<HomepageData>>('../../../assets/json/homepage/guides.json');
  }
}
