import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';  
import { setNavbarStyle } from '../../../config/default'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  public selectLanguage(tag: string) {  
    this.translateService.use(tag)  
  }  

  defaultSetting() : string {
    return setNavbarStyle()
  }

}
