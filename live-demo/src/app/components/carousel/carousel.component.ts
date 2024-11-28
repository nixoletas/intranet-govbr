import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import BRCarousel from '@govbr-ds/core/dist/components/carousel/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'br-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class BrCarousel implements AfterViewInit {

  instance: any;

  ngAfterViewInit() {
    this.instance = new BRCarousel('.br-carousel', document.querySelector('.br-carousel'));
  }

}
