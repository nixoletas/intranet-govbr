import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ButtonBalloonComponent } from '../../components/button-balloon/button-balloon.component';

@Component({
  selector: 'br-cartilhas-e-normas',
  standalone: true,
  imports: [ButtonBalloonComponent],
  template: `
  <h1>Cartilhas, normas e manuais</h1>
  <br-button-balloon [items]="items"></br-button-balloon>
  `,
})
export class CartilhasENormasComponent {
  repo = environment.REPOSITORIO;

  public items: any[] = [
    {
      icon: 'fa fa-book',
      name: 'RDE',
      route: `https://www.planalto.gov.br/ccivil_03/decreto/2002/d4346.htm`,
      external: true
    },
    {
      icon: 'fa fa-book',
      name: 'RISG',
      route: `https://bdex.eb.mil.br/jspui/bitstream/123456789/164/1/RISG.pdf`,
      external: true
    },
    {
      icon: 'fa fa-book',
      name: 'RCont',
      route: `https://www2.camara.leg.br/legin/fed/decret/1910-1919/decreto-13753-10-setembro-1919-525050-regulamento-pe.pdf`,
      external: true
    },
    {
      icon: 'fa fa-book',
      name: 'Manual de TFM',
      route: `https://www.ipcfex.eb.mil.br/images/manuais/EB70-MC-10375_Manual_TFM.pdf`,
      external: true
    },
    {
      icon: 'fa fa-book',
      name: 'Manual de siglas',
      route: `https://www.gov.br/defesa/pt-br/arquivos/File/legislacao/emcfa/publicacoes/manual-md33-m-02-manual-de-abreviaturas-siglas-simbolos-e-convencoes-cartograficas.pdf`,
      external: true
    },
    {
      icon: 'fa fa-book',
      name: 'RUE Online',
      route: `https://www.calameo.com/exercito-brasileiro/read/00123820631730600fea9`,
      external: true
    },
    {
      icon: 'fa fa-book',
      name: 'RAE',
      route: `http://www.sef.eb.mil.br/images/a2/assessoria2/2021/port_1555_cex_rae.pdf`,
      external: true
    },
  ]

}
