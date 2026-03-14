import { Component, inject } from '@angular/core';
import { MenuModule } from 'primeng/menu';

import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  imports: [MenuModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone: true,
})
export class SidebarComponent {
  router = inject(Router);
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Navigation',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-home',
            routerLink: '/dashboard',
            routerLinkActiveOptions: { exact: true },
          },
          {
            label: 'Stock Analysis',
            icon: 'pi pi-chart-line',
            routerLink: '/analysis',
            routerLinkActiveOptions: { exact: true },
          },
        ],
      },
      {
        label: 'Management',
        items: [
          {
            label: 'Transactions',
            icon: 'pi pi-list',
            routerLink: '/transactions',
            disabled: true,
          },
          {
            label: 'Reports',
            icon: 'pi pi-chart-bar',
            routerLink: '/reports',
            disabled: true,
          },
        ],
      },
    ];
  }
}
