import { Component, ElementRef } from '@angular/core'

import BRHeader from '@govbr-ds/core/dist/components/header/header'
import { environment } from '../../../environments/environment'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'br-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class BrHeaderComponent {
  public title = 'Nome da sua OM (componente header)'
  public subtitle = 'Denominação Histórica'
  public signature: string = 'Ministério da Defesa'
  instance: any // Instância do componente angular

  constructor(private brHeader: ElementRef) { }
  ngAfterViewInit() {
    this.instance = new BRHeader('.br-header', this.brHeader.nativeElement.querySelector('.br-header'))
  }

  public image = {
    src: `${environment.ASSETS_PICS}/logo9bcom2.png`,
    alt: '9º B Com GE',
  }

  public links: any[] = [
    {
      href: 'http://intranet.cmo.eb.mil.br',
      name: 'CMO',
      target: '_blank',
      title: 'CMO',
    },
    {
      href: 'http://intranet.9rm.eb.mil.br',
      name: '9ª RM',
      target: '_blank',
      title: '9RM',
    },
    {
      href: '',
      name: 'Login 6º CTA',
      icon: 'fa-brands fa-safari',
      target: '_blank',
      title: 'logincta',
    },
    {
      href: 'http://pergaminho.eb.mil.br/',
      icon: 'fa-solid fa-book-open-reader',
      name: 'Pergaminho',
      target: '_blank',
      title: 'pergaminho',
    },
  ]


}
