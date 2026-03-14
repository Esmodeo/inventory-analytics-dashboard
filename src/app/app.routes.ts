import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout';
import { LoginPageComponent } from './pages/auth/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { StockAnalysisComponent } from './pages/stock-analysis/stock-analysis';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      title: 'Login',
    },
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'dashboard',
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
