import { Component, Input, OnInit } from '@angular/core';
import { HomepageData } from '../../models/homepage.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  indexTag: number = 0;
  @Input() dataBundle!: Array<HomepageData> | null;
  carouselNewStyle=""
  currentShift: number = -3;
  constructor() { }

  ngOnInit(): void {
  }
  carouselForward() {
    this.indexTag += 1;
    this.currentShift -= 35;
    this.carouselNewStyle="transform: translateX("+this.currentShift+"%);"
  }
  carouselBackward() {
    this.indexTag -= 1;
    this.currentShift += 35;
    this.carouselNewStyle="transform: translateX("+this.currentShift+"%);"
  }

}
