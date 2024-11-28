import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import BRTab from '@govbr-ds/core/dist/components/tab/tab';
import { LinksService } from '../../services/links.service';
import { CommonModule } from '@angular/common';

interface Link {
  href: string;
  title: string;
  target?: string;
  icon: string;
}

@Component({
  selector: 'br-tab',
  templateUrl: './tab.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements AfterViewInit {
  instance: any;
  mainLinks: Link[];

  intranets: Link[];

  usefulLinks: Link[];

  userHelp: Link[];

  constructor(
    private brTab: ElementRef,
    private linkService: LinksService
  ) {
    this.mainLinks = this.linkService.mainLinks;
    this.intranets = this.linkService.intranets;
    this.usefulLinks = this.linkService.usefulLinks;
    this.userHelp = this.linkService.userHelp;
  }

  @ViewChild('tab') tab: any;

  ngAfterViewInit() {
    this.instance = new BRTab('.br-carousel', this.brTab.nativeElement.querySelector('.br-tab'));
  }
}
