import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'br-comandante',
  standalone: true,
  imports: [MarkdownModule],
  template: `
    <markdown [src]="markdownSrc"></markdown>
  `
})
export class ComandanteComponent {
  public markdownSrc: string;

  constructor() {
    this.markdownSrc = `${environment.ASSETS_MD}/comandante.md`;
  }
}
