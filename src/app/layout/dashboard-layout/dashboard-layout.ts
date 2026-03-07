import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, Topbar, Sidebar],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss',
})
export class DashboardLayout {}
