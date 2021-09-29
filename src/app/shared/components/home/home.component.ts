import { Component, OnInit } from '@angular/core';
import { HomepageData } from '../../models/homepage.model';
import { HomepageDataService } from '../../service/homepage-data.service';
import { Observable, of } from 'rxjs';
import { setDefaultMargin } from '../../../config/default'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataBundle$: Observable<Array<HomepageData>> = 
    this.dataService.getHompageFeaturedData()
  dataBundle2$: Observable<Array<HomepageData>> = 
    this.dataService.getHompageGuidesData()
    
  constructor(private dataService: HomepageDataService) { }

  ngOnInit(): void {
  }

  defaultSetting(): string {
    return setDefaultMargin()
  }

}
