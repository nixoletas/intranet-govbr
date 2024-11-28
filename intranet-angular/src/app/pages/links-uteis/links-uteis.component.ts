import { ChangeDetectorRef, Component, AfterViewInit } from '@angular/core';
import { LinksService } from '../../services/links.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'br-links-uteis',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './links-uteis.component.html',
})
export class LinksUteisComponent implements AfterViewInit {
  linkItems: any[] = [];

  constructor(
    private linksService: LinksService,
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    // Update the linkItems array
    this.linkItems = this.linksService.usefulLinks.map(item => ({
      iconClass: item.icon,
      description: item.description,
      label: item.title,
      route: item.href,
      external: true
    }));

    // Manually trigger change detection
    this.cdr.detectChanges();
  }
}
