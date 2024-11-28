import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface FooterSection {
  title: string;
  items: { content: string; route: string; external: boolean }[];
}

@Component({
  selector: 'br-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
})
export class BrFooterComponent {

  public image = {
    src: `${environment.ASSETS_PICS}/logo_eb.png`,
    alt: 'Logo EB',
  }

  footerSections: FooterSection[] = [
    {
      title: 'Sistemas',
      items: [
        { content: 'SPED', route: '', external: true },
        { content: 'SisBol', route: '', external: true },
        { content: 'Drive', route: '', external: true },
        { content: 'Zimbra', route: '', external: true },
        { content: 'SGD', route: '', external: true },
      ],
    },
    {
      title: '1ª Seção',
      items: [
        { content: 'Escala', route: '/s1/servico', external: false },
      ],
    },
    {
      title: '3ª Seção',
      items: [
        { content: 'QTS CTTEP', route: '', external: true },
        { content: 'QTS IIQ e CFC', route: '', external: true },
        { content: 'QTFM CTTEP', route: '', external: true },
        { content: 'QTFM IIQ e CFC', route: '', external: true },
      ],
    },
    {
      title: '4ª Seção',
      items: [
        { content: 'Pedido de combustível', route: '', external: true },
        { content: 'Visualizar pedidos de combustível', route: '', external: true },
      ],
    },
    {
      title: 'Links Úteis',
      items: [
        { content: 'Marcar consulta H Mil A CG', route: 'https://sigh.hmilacg.eb.mil.br/paciente/seg', external: true },
        { content: 'Sistemas externos', route: '/sistemas-externos', external: false },
      ],
    },
    {
      title: 'Apoio ao Usuário',
      items: [
        { content: 'Trocar senha sistemas internos', route: '', external: true },
        { content: 'Trocar senha VPN', route: '', external: true },
        { content: 'Abrir chamado STI', route: '', external: true },
      ],
    },
  ];
}
