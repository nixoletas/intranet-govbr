import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'br-secretaria',
  template: `
  <iframe [src]="iframeSrc" width="100%" height="550"></iframe>
  `,
})
export class SecretariaComponent {
  iframeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = `${environment.INTRANET}/arquivos/s1/8%20-%20Secretaria/`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
