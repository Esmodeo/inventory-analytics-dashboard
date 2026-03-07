import { Routes } from '@angular/router';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { StockAnalysis } from './pages/stock-analysis/stock-analysis';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayout,
    children: [
      {
        path: '',
        component: Dashboard,
      },
      {
        path: 'analysis',
        component: StockAnalysis,
      },
    ],
  },
];
