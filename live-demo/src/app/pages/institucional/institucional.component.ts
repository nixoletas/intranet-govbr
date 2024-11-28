import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonBalloonComponent } from '../../components/button-balloon/button-balloon.component';

@Component({
  selector: 'br-institucional',
  standalone: true,
  imports: [ButtonBalloonComponent],
  template: `
  <h1>Institucional</h1>
<br-button-balloon [items]="items"></br-button-balloon>`,
})
export class InstitucionalComponent {
  currentRoute = 'institucional'

  public items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.generateSubRoutesList();
  }

  private generateSubRoutesList(): void {
    // Find the route configuration for 's1'
    const s1Route = this.router.config.find(route => route.path === this.currentRoute);
    if (s1Route && s1Route.children) {
      this.items = s1Route.children.map(child => ({
        name: child.path,
        href: `${this.currentRoute}/${child.path}`
      }));
    }
  }
}
