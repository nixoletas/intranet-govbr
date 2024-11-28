import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'br-s2-avisos',
  template: `
  <iframe class="escala" [src]="iframeSrc" width="100%" height="550"></iframe>
  `,

})
export class AvisosS2Component {
  iframeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = `${environment.INTRANET}/arquivos/s2/Avisos/`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
