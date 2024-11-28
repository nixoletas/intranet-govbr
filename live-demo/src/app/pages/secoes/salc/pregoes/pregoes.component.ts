import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'br-salc-pregoes',
  template: `
  <iframe class="escala" [src]="iframeSrc" width="100%" height="550"></iframe>
  `,

})
export class PregoesSalcComponent {
  iframeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = `${environment.INTRANET}/arquivos/salc/Preg%c3%b5es/`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
