import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { StockAnalysisComponent } from './pages/stock-analysis/stock-analysis';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
        },
      },
      {
        path: 'analysis',
        component: StockAnalysisComponent,
        data: {
          title: 'Stock Analysis',
        },
      },
    ],
  },
];
