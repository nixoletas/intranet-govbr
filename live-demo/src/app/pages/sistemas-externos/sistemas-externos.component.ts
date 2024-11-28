import { Component } from '@angular/core';
import { Item } from './sistemas-externos.model';

@Component({
  selector: 'br-sistemas-externos',
  standalone: true,
  imports: [],
  templateUrl: './sistemas-externos.component.html',
})
export class SistemasExternosComponent {
  items: Item[] = [
    {
      link: 'http://example.com/link1',
      title: 'Title 1',
      description: 'Description 1'
    },
    {
      link: 'http://example.com/link2',
      title: 'Title 2',
      description: 'Description 2'
    },
    {
      link: 'http://example.com/link3',
      title: 'Title 3',
      description: 'Description 3'
    }
  ];

  constructor() { }

}
