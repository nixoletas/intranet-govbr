import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrMenuComponent } from './components/menu/menu.component';
import { BrHeaderComponent } from './components/header/header.component';
import { BrFooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrMenuComponent, BrHeaderComponent, BrFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'intranet-ssr';
}
