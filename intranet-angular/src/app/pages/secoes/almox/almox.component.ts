import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'br-almox',
  template: `
  <iframe class="escala" [src]="iframeSrc" width="100%" height="550"></iframe>
  `,

})
export class AlmoxComponent {
  iframeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = `${environment.INTRANET}/arquivos/almox/`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
