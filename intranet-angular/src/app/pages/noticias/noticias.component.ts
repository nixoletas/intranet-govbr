import { Component } from '@angular/core';
import { NewsComponent } from '../../components/news/news.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'br-noticias',
  standalone: true,
  imports: [NewsComponent, RouterModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent { }
