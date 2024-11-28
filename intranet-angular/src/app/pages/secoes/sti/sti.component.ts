import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { MarkdownModule } from 'ngx-markdown';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'br-sti',
  standalone: true,
  imports: [MarkdownModule, RouterLink],
  template: `
  <h2><strong>Seção de Tecnologia da Informação</strong></h2>
  <h4><strong>Ramal:</strong> 890-5718</h4>
  <p><a routerLink="/sti/chamado"><strong>Abrir chamado (Suporte)</strong><i class="fa fa-link"></i> </a></p>
  <div class="br-divider my-6"></div>
  <a href="https://sti.9bcomge.eb.mil.br/" target="_blank"><h2 class="rounder-lg border-solid-md	 bg-blue-70 text-pure-0">Dashboard <i class="fa fa-link"></i></h2></a>
<div class="br-table" title="Sistemas STI">
    <div class="table-header">
      <div class="top-bar">
        <div class="table-title text-bold">Sistemas STI</div>
        <div class="actions-trigger text-nowrap">
          <div class="br-list" id="target01-406" role="menu" aria-labelledby="button-dropdown-density" hidden="hidden">
          </div>
        </div>
      </div>
    </div>
    <table><colgroup span="3"></colgroup>
      <thead>
        <tr>
          <th class="border-bottom" scope="col"><strong>Assunto</strong></th>
          <th class="border-bottom border-left" scope="col"><strong>Link</strong></th>
          <th class="border-bottom border-left" colspan="3" scope="colgroup"><strong>Descrição</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <th class="border-right" rowspan="6" scope="rowgroup"><i class="fa fa-headset"></i>Chamados externos</th>
        <tr>
            <td title="link"><a href="https://cop.6cta.eb.mil.br" target="_blank"><i class="fa fa-headset"></i> OTOBO 6º CTA</a></td>
            <td title="descricao" colspan="3">Sistema de chamados do 6º CTA</td>
        </tr>
        <tr>
            <td title="link"><a href="https://ldap.6cta.eb.mil.br" target="_blank">LDAP 6º CTA</a></td>
            <td title="descricao" colspan="3">Controle de acesso (Internet avançada e VPN)</td>
        </tr>
      </tbody>
    </table>
  </div>


`,
})
export class StiComponent {
  public markdownSrc: string;

  constructor() {
    this.markdownSrc = `${environment.ASSETS_MD}/sti.md`
  }
}
