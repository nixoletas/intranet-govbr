import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PopUpService } from './pop-up.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClient],
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit, OnDestroy {
  isVisible = true;
  popup: string = "";
  imageSrc: string = ""; // Path to the desired image
  displayTime = 20000; // Time in milliseconds to display the modal
  item: any;
  link: string = "/";
  isLoading: boolean = true; // Loading state flag

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private popupService: PopUpService
  ) { }

  ngOnInit(): void {
    this.loadPopup();
    // Check if the modal has been shown before
    const isModalShown = sessionStorage.getItem('isModalShown');
    if (isModalShown) {
      this.isVisible = false;
    } else {

      this.isVisible = true;
      sessionStorage.setItem('isModalShown', 'true');
      // Automatically close the modal after a set time, if configured
      setTimeout(() => {
        this.closeModal();
      }, this.displayTime);

      // Move the modal to the body
      this.renderer.appendChild(document.body, this.el.nativeElement);
    }
  }

  loadPopup() {
    this.isLoading = true; // Set loading state to true before fetching data
    this.popupService.getGalerias().subscribe(response => {
      if (!response.data) {
        this.isVisible = false;
        this.isLoading = false;
        return;
      }

      this.item = response.data;
      this.popup = this.item?.attributes?.popup?.data[0]?.attributes?.formats?.large?.url;
      this.imageSrc = `${environment.STRAPI_API}${this.popup}`;
      this.link = this.item?.attributes?.link;
      this.isLoading = false; // Set loading state to false after data is fetched
    }, error => {
      console.log('Não há POP-UP publicado:', error);
      // Handle error if necessary
      this.isVisible = false; // Hide popup in case of error
      this.isLoading = false; // Set loading state to false
    });
  }

  closeModal(): void {
    this.isVisible = false;
  }

  ngOnDestroy(): void {
    // Remove the modal from the body when the component is destroyed
    if (this.el.nativeElement.parentNode) {
      this.el.nativeElement.parentNode.removeChild(this.el.nativeElement);
    }
  }
}
