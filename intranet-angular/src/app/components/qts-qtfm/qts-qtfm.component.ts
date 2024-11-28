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
      route: '',
      external: true
    },
    {
      icon: 'fa fa-person-running',
      name: 'QTFM CTTEP',
      route: '',
      external: true
    },
    {
      icon: 'fa fa-calendar',
      name: 'QTS IIQ e CFC',
      route: '',
      external: true
    },
    {
      icon: 'fa fa-person-running',
      name: 'QTFM IIQ e CFC',
      route: '',
      external: true
    },
  ]

}
