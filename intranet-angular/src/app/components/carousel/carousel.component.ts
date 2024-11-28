import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import BRCarousel from '@govbr-ds/core/dist/components/carousel/carousel';
import { environment } from '../../../environments/environment';
import { CarouselService } from './carousel.service';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'br-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class BrCarousel implements AfterViewInit, OnDestroy {

  @ViewChild('carousel') carousel: ElementRef | undefined;
  instance: any;
  currentIndex = signal(0);
  items = signal<any[]>([]);
  isLoading = signal(true);
  intervalId: any;
  countdownIntervalId: any;
  countdown = signal(5); // Initial countdown value in seconds

  constructor(
    private carouselService: CarouselService,
    private brCarousel: ElementRef
  ) { }

  ngAfterViewInit() {
    this.loadGalerias();
  }

  loadGalerias(): void {
    if (!this.brCarousel || !this.brCarousel.nativeElement) {
  console.error('brCarousel is not defined');
  return;
}

    this.carouselService.getGalerias().subscribe(response => {
      const items = response.data.map(item => ({
        image: `${environment.STRAPI_API}${item.attributes.banner.data.attributes.formats.large.url}`,
        title: item.attributes.titulo,
        subtitle: item.attributes.subtitulo,
        link: item.attributes.link
      }));

      this.items.set(items);
      this.preloadImages(items).then(() => {
        this.isLoading.set(false);
        this.instance = new BRCarousel('.br-carousel', this.brCarousel.nativeElement.querySelector('.br-carousel'));
        this.startAutoSlide();
      });
    });
  }

  async preloadImages(items: any[]): Promise<void> {
    const promises = items.map(item => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = item.image;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    return Promise.all(promises).then(() => { });
  }

  startAutoSlide(): void {
    this.resetCountdown();
    this.intervalId = setInterval(() => {
      this.nextSlide();
      this.resetCountdown();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.countdownIntervalId) {
      clearInterval(this.countdownIntervalId);
      this.countdownIntervalId = null;
    }
  }

  pauseAutoSlide(): void {
    this.stopAutoSlide();
    this.countdown.set(5); // Reset countdown to 5 when paused
  }

  resumeAutoSlide(): void {
    if (!this.intervalId) {
      this.startAutoSlide();
    }
  }

  prevSlide() {
    this.currentIndex.set((this.currentIndex() > 0) ? this.currentIndex() - 1 : this.items().length - 1);
    this.resetCountdown();
  }

  nextSlide() {
    this.currentIndex.set((this.currentIndex() + 1) % this.items().length);
    this.resetCountdown();
  }

  resetCountdown() {
    this.countdown.set(5);
    if (this.countdownIntervalId) {
      clearInterval(this.countdownIntervalId);
    }
    this.countdownIntervalId = setInterval(() => {
      if (this.countdown() > 0) {
        this.countdown.set(this.countdown() - 1);
      }
    }, 1000);
  }

  ngOnDestroy() {
    // Clean up the interval on component destruction
    this.stopAutoSlide();
  }
}
