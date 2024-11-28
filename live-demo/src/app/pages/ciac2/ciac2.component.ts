import { Component } from '@angular/core';
import { ButtonBalloonComponent } from '../../components/button-balloon/button-balloon.component';

@Component({
  selector: 'br-ciac2',
  standalone: true,
  imports: [ButtonBalloonComponent],
  templateUrl: './ciac2.component.html',
})
export class Ciac2Component {
  public items: any[] = [
    {
      icon: 'fa fa-skull',
      name: 'Caveirinha 2024',
      route: '',
      external: true
    },
    {
      icon: 'fa fa-phone',
      name: 'Plano de Chamada',
      route: '',
      external: true
    },
    {
      icon: 'fas fa-truck',
      name: 'Viaturas',
      route: '',
      external: true
    },
    {
      icon: 'fas fa-map',
      name: 'Mapa da força',
      route: '',
      external: true
    },
  ]
}
