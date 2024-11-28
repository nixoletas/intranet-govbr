import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'br-missao',
  standalone: true,
  imports: [MarkdownModule],
  template: `
    <markdown [src]="markdownSrc"></markdown>
  `

})
export class MissaoComponent {
  public markdownSrc: string;

  constructor() {
    this.markdownSrc = `${environment.ASSETS_MD}/missao.md`;
  }

}
