import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'br-ramais',
  standalone: true,
  imports: [MarkdownModule],
  template: `
    <markdown [src]="markdownSrc"></markdown>
  `,
})
export class RamaisComponent {
  public markdownSrc: string;
  constructor() {
    this.markdownSrc = `${environment.ASSETS_MD}/ramais.md`
  }

}
