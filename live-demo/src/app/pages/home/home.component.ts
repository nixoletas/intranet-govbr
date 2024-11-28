import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TabComponent } from '../../components/tab/tab.component';
import { ButtonBalloonComponent } from '../../components/button-balloon/button-balloon.component';
import { CalendarioComponent } from '../../components/calendario/calendario.component';
import { BrCarousel } from '../../components/carousel/carousel.component';
import { QtsQtfmComponent } from '../../components/qts-qtfm/qts-qtfm.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    TabComponent,
    ButtonBalloonComponent,
    CalendarioComponent,
    BrCarousel,
    QtsQtfmComponent,
],
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  imgSrc = `${environment.ASSETS_PICS}/calendario.jpg`
  cardapioSrc = `${environment.ASSETS_SVG}/cardapio.svg`

  public items: any[] = [
    {
      icon: 'fa fa-id-card',
      name: 'Sistemas Internos',
      route: 'http://sistemas.9bcomge.eb.mil.br',
      external: true
    },
    {
      icon: 'fa fa-utensils',
      name: 'Arranchamento',
      route: 'http://sistemas.9bcomge.eb.mil.br/sisrancho/',
      external: true
    },
    {
      icon: 'fas fa-person-military-rifle',
      name: 'Escala',
      route: '/s1/servico',
    },
  ]

}
