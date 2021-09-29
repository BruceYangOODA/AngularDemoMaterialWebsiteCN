import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    GettingStartedComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    GettingStartedComponent
  ]
})
export class GuidesModule { }
