import { Injectable } from '@angular/core';

interface Link {
  href: string;
  title: string;
  target?: string;
  icon: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  mainLinks: Link[] = [
    { href: '', title: 'SPED', target: '_blank', icon: 'fa fa-file-lines' },
    { href: '', title: 'SisBol', target: '_blank', icon: 'fa fa-book' },
    { href: '', title: 'Boletins', icon: 'fa fa-magnifying-glass' },
    { href: '', title: 'Drive', target: '_blank', icon: 'fa fa-cloud' },
    { href: '', title: 'Zimbra', icon: 'fa fa-envelope', target: '_blank' },
    { href: '', title: 'SGD', target: '_blank', icon: 'fa fa-chart-line' },
  ];

  systems: Link[] = [
    { href: '', title: 'SPED', target: '_blank', icon: 'fa fa-file-lines' },
    { href: '', title: 'SisBol', target: '_blank', icon: 'fa fa-book' },
    { href: '', title: 'Boletins', target: '_self', icon: 'fa fa-magnifying-glass' },
    { href: '', title: 'Drive', target: '_blank', icon: 'fa fa-cloud' },
    { href: '', title: 'Zimbra', icon: 'fa fa-envelope', target: '_blank' },
    { href: '', title: 'SGD', target: '_blank', icon: 'fa fa-chart-line' },
  ];

  intranets: Link[] = [
    { href: '', title: 'CMO', target: '_blank', icon: '' },
    { href: '', title: '9ª RM', target: '_blank', icon: '' },
    { href: '', title: '6º CTA', target: '_blank', icon: '' },
  ];

usefulLinks: Link[] = [
    {
      href: '',
      title: ' SisLogMnt', target: '_blank',
      icon: 'fa-solid fa-screwdriver-wrench',
      description: 'Sistema Logística de Manutenção'
    },
    {
      href: '',
      title: 'SPED 2.9', target: '_blank',
      icon: 'fa fa-file-lines',
      description: 'Sistema de Protocolo do Exército'
    },
    {
      href: '',
      title: 'Arranchamento CMO',
      target: '_blank',
      icon: 'fa fa-utensils',
      description: 'Sistema de Arranchamento do CMO (B Adm Ap/CMO)'
    },
    {
      href: '',
      title: 'Cálculo de Tempo de Sv',
      target: '_blank',
      icon: 'fa fa-calculator',
      description: 'Calculadora de Tempo de Serviço do EGGCF'
    },
    {
      href: '',
      title: 'Conferência dos Exércitos Americanos (CEA)',
      target: '_blank',
      icon: '',
      description: 'Conferência dos Exércitos Americanos (CEA)'
    },
    {
      href: '',
      title: 'Correio - Webmail',
      target: '_blank',
      icon: 'far fa-envelope',
      description: 'Webmail'
    },
    {
      href: '',
      title: 'EB Mail',
      target: '_blank',
      icon: 'fa fa-envelope',
      description: 'EB-Mail'
    },
    {
      href: '',
      title: 'FAEL',
      target: '_blank',
      icon: '',
      description: 'Viaturas 9RM'
    },
    {
      href: '',
      title: 'SCA',
      target: '_blank',
      icon: 'fa fa-gas-pump',
      description: 'Sistema para Controle de Abastecimento (Comando do 9º Grupamento Logístico)'
    },
    {
      href: '',
      title: 'Canção do Soldado Pantaneiro',
      target: '_blank',
      icon: 'fa fa-music',
      description: 'Canção do soldado pantaneiro e letra (Intranet CMO)'
    },
    {
      href: '',
      title: 'DISTÂNCIAS ENTRE CIDADES',
      target: '_blank',
      icon: 'fa fa-location',
      description: 'Distâncias entre cidades (DPGO)'
    },
    {
      href: '',
      title: 'Velocímetro EBNet+',
      target: '_blank',
      icon: 'fa fa-gauge',
      description: 'Velocímetro EBNet'
    },
    {
      href: '',
      title: 'OPUS',
      target: '_blank',
      icon: '',
      description: 'OPUS'
    },
    {
      href: '',
      title: 'Ouvidoria do EB',
      target: '_blank',
      icon: 'fa fa-phone',
      description: 'Ouvidoria do EB'
    },
    {
      href: '',
      title: 'Rede Cmdo',
      target: '_blank',
      icon: '',
      description: 'Webmail rede Cmdo'
    },
    {
      href: '',
      title: 'SADLA',
      target: '_blank',
      icon: '',
      description: 'SADLA Coter'
    },
    {
      href: '',
      title: 'SGL',
      target: '_blank',
      icon: ''
    },
    {
      href: '',
      title: 'SIGELOG',
      target: '_blank',
      icon: '',
      description: 'SSO SIGELOG'
    },
    {
      href: '',
      title: 'Siscofis WEB',
      target: '_blank',
      icon: '',
      description: 'SISCOFIS Web'
    },
    {
      href: '',
      title: 'SISCOL',
      target: '_blank',
      icon: '',
      description: 'SISCOL'
    }
  ];

userHelp: Link[] = [
    { href: '', title: 'Trocar senha VPN', target: '_blank', icon: 'fa fa-key' },
    { href: '', title: 'Chamado - STI', icon: 'fa fa-headset' },
    { href: '', title: 'Como acessar VPN', target: '_blank', icon: 'fa fa-question' },
    { href: '', title: 'Como acessar Internet', target: '_blank', icon: 'fa fa-question' },
    { href: '', title: 'Legislação de TIC', target: '_blank', icon: 'fa fa-book' },
  ];


  constructor() { }
}
