import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../../../environments/environment';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  standalone: true,
  imports: [MarkdownModule]
})
export class ServicoPageComponent {
  iframeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = `${environment.INTRANET}/arquivos/s1/3-Escala_de_Sv/`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}