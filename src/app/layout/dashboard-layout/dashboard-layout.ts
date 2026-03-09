import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';
import { TopbarComponent } from '../topbar/topbar';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, TopbarComponent, SidebarComponent],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss',
  standalone: true,
})
export class DashboardLayoutComponent {
  isSidebarClosed = signal<boolean>(false);
  closeSidebar(val: boolean) {
    this.isSidebarClosed.set(val);
  }
}
