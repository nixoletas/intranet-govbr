import { Component } from '@angular/core';
import { ButtonBalloonComponent } from '../button-balloon/button-balloon.component';

@Component({
  selector: 'br-qts-qtfm',
  standalone: true,
  imports: [ButtonBalloonComponent],
  templateUrl: './qts-qtfm.component.html',
})
export class QtsQtfmComponent {
  public items: any[] = [
    {
      icon: 'fa fa-calendar',
      name: 'QTS CTTEP',
      route: 'http://10.56.19.133/arquivos/s3/6%20-%20QTS%20CTTEP/',
      external: true
    },
    {
      icon: 'fa fa-person-running',
      name: 'QTFM CTTEP',
      route: 'http://10.56.19.133/arquivos/s3/7%20-%20QTFM%20CTTEP/',
      external: true
    },
    {
      icon: 'fa fa-calendar',
      name: 'QTS IIQ e CFC',
      route: 'http://10.56.19.133/arquivos/s3/8%20-%20QTS%20IIQ%20e%20CFC/',
      external: true
    },
    {
      icon: 'fa fa-person-running',
      name: 'QTFM IIQ e CFC',
      route: 'http://10.56.19.133/arquivos/s3/9%20-%20QTFM%20IIQ%20e%20CFC/',
      external: true
    },
  ]

}
