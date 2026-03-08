import { Component } from '@angular/core';
import { StatCardComponent } from '../../components/stat-card/stat-card';

@Component({
  selector: 'app-dashboard',
  imports: [StatCardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true,
})
export class DashboardComponent {}
