import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrMenuComponent } from './components/menu/menu.component';
import { BrHeaderComponent } from './components/header/header.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { BrFooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrMenuComponent, BrHeaderComponent, PopUpComponent, BrFooterComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'intranet-ssr';
}
