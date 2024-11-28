import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonBalloonComponent } from '../../../components/button-balloon/button-balloon.component';

@Component({
    selector: 'br-s1',
    standalone: true,
    imports: [ButtonBalloonComponent],
    template: `
    <h1>1ª Seção</h1>
    <br-button-balloon [items]="items"></br-button-balloon>
  `,
})
export class S1PageComponent implements OnInit {
    public items: any[] = [];

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.generateSubRoutesList();
    }

    private generateSubRoutesList(): void {
        // Find the route configuration for 's1'
        const s1Route = this.router.config.find(route => route.path === 's1');
        if (s1Route && s1Route.children) {
            this.items = s1Route.children.map(child => ({
                name: child.path,
                href: `s1/${child.path}`
            }));
        }
    }
}
