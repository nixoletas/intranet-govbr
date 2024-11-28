import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'br-button-balloon',
  templateUrl: './button-balloon.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./button-balloon.component.scss']
})
export class ButtonBalloonComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
