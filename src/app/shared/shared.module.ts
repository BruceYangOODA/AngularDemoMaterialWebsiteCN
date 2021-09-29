import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule,HttpClient } from'@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/','.json');
}

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,  
    HttpClientModule,  
    MaterialModule,  
    TranslateModule,    
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })  
  ],
  exports:[
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class SharedModule { }
