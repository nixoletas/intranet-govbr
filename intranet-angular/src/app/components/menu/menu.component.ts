import { AfterViewInit, ChangeDetectorRef, Component, NgModule } from '@angular/core';
import BRMenu from '@govbr-ds/core/dist/components/menu/menu';
import { LinksService } from '../../services/links.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'br-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class BrMenuComponent implements AfterViewInit {
  instance: any

  menuItems = [
    {
      iconClass: 'fa-home',
      label: 'Home',
      route: '/home',
      role: 'menuitem'
    },
    {
      iconClass: 'fas fa-person-military-rifle',
      label: 'Escala de Serviço',
      route: '/s1/servico',
    },
    {
      iconClass: 'fa-feather',
      label: 'Institucional',
      children: [
        {
          iconClass: 'fa-arrow-right',
          label: 'Visão de futuro',
          route: 'institucional/visao'
        },
        {
          iconClass: 'fa-arrow-right',
          label: 'Subordinação',
          route: 'institucional/subordinacao'
        },
        {
          iconClass: 'fa-user',
          label: 'Comandante',
          route: 'institucional/comandante'
        },
        {
          iconClass: 'fa-user',
          label: 'Adjunto de Comando',
          route: 'institucional/adjunto-de-comando'
        },
        {
          iconClass: 'fa-arrow-right',
          label: 'Missão',
          route: 'institucional/missao'
        },
        {
          iconClass: 'fa-map-pin',
          label: 'Endereço',
          route: 'institucional/endereco'
        }
      ]
    },
    {
      iconClass: 'fa-door-open',
      label: 'Seções',
      children: [
        {
          label: '1ª Seção',
          children: [
            {
              label: 'Boletim Interno',
              route: 's1/boletins'
            },
            {
              label: 'Escala de servico',
              route: 's1/servico'
            },
            {
              label: 'Avisos',
              route: 's1/avisos'
            },
            {
              label: 'Aditamentos',
              route: 's1/aditamentos'
            },
            {
              label: 'Modelos de documentação',
              route: 's1/modelos'
            },
            {
              label: 'Ordem de Serviço',
              route: 's1/os'
            },
            {
              label: 'Assesoria Jurídica',
              route: 's1/ass-jurd'
            },
            {
              label: 'Secretaria',
              route: 's1/secretaria'
            },
            {
              label: 'Livro de saída da guarnição',
              route: 's1/livro-viagem'
            }
          ]
        },
        {
          label: '2ª Seção',
          children: [
            //{
            //  label: 'Boletins de Acesso Restrito',
            //  route: 's2/bar'
            //},
            {
              label: 'Avisos',
              route: 's2/avisos'
            },
            //{
            //  label: 'Fique atento',
            //  route: 's2/fique-atento'
            //},
            //{
            //  label: 'Legislação',
            //  route: 's2/legislacao'
            //},
          ]
        },
        {
          label: '3ª Seção',
          children: [
            {
              iconClass: 'fa fa-book',
              label: 'Documentos',
              route: 's3/documentos'
            },
            {
              iconClass: 'fa fa-cloud',
              label: 'Instruções',
              route: 'http://drive.9bcomge.eb.mil.br/index.php/s/M25gkkTsSCYDEM6',
              external: true
            },
            {
              iconClass: 'fa fa-file-pdf',
              label: 'Índices TAF 2024',
              route: 'https://www.ipcfex.eb.mil.br/images/Antigos/Port_850-EME_Dtz_Avl_Fis_EB.pdf',
              external: true
            },
            {
              iconClass: 'fa fa-flag',
              label: 'Operações',
              route: 'operacoes'
            },
            {
              iconClass: 'fa fa-chart-simple',
              label: 'POP',
              route: 's3/pop'
            },
          ]
        },
        {
          label: '4ª Seção',
          children: [
            {
              iconClass: 'fa fa-book',
              label: 'Legislação',
              route: 's4/legislacao'
            },
            {
              iconClass: 'fa fa-book',
              label: 'Modelos de documentos',
              route: 's4/modelos'
            },
          ]
        },
        {
          label: 'Fisc Adm',
          route: 'fiscalizacao'
        },
        {
          label: 'EGP',
          route: 'egp'
        },
        {
          label: 'SALC',
          children: [
            {
              iconClass: 'fa fa-book',
              label: 'Documentos',
              route: 'salc/arquivos'
            },
            {
              iconClass: 'fa fa-paperclip',
              label: 'Pregões',
              route: 'salc/pregoes'
            },
          ]
        },
        {
          label: 'STI',
          route: '/sti',
        },
        {
          label: 'SPP',
          route: 'spp'
        },
        {
          label: 'Almox',
          route: 'almox'
        }
      ]
    },
    {
      iconClass: 'fa-laptop',
      label: 'Sistemas',
      children: []
    },
    {
      iconClass: 'fa-user',
      label: 'Apoio ao usuário',
      children: []
    },
    {
      iconClass: 'fa fa-plane',
      label: 'Livro de saída da guarnição',
      route: '/s1/livro-viagem',
    },
    {
      iconClass: 'fa-utensils',
      label: 'Arranchamento',
      route: 'http://sistemas.9bcomge.eb.mil.br/sisrancho/',
      external: true
    },
    {
      iconClass: 'fa-headset',
      label: 'Chamado - STI',
      route: 'sti/chamado'
    },
    {
      iconClass: 'fa-link',
      label: 'Links Úteis',
      route: 'links-uteis'
    },
    {
      iconClass: 'fas fa-network-wired',
      label: 'Sistemas Externos',
      route: 'sistemas-externos'
    },
    {
      iconClass: 'fa-book',
      label: 'Cartilhas e normas',
      route: '/cartilhas-e-normas'
    },
    {
      iconClass: 'fa-phone',
      label: 'Ramais',
      route: '/ramais',
    },
  ]

  constructor(
    private linksService: LinksService,
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.instance = new BRMenu('.br-menu', document.querySelector('.br-menu'));

    this.menuItems[4].children = this.linksService.systems.map(item => ({
      iconClass: item.icon,
      label: item.title,
      route: item.href,
      external: true,
      target: item?.target
    }));

    this.menuItems[5].children = this.linksService.userHelp.map(item => ({
      iconClass: item.icon,
      label: item.title,
      route: item.href,
      external: true
    }));

    this.cdr.detectChanges();
  }
}
