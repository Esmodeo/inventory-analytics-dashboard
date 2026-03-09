import { ChangeDetectionStrategy, Component } from '@angular/core';
import { recentTransactions } from '../../assets/mocks/recent-transactions-data';
import { ChartWidgetComponent } from '../../components/chart-widget/chart-widget';
import { ChartOptions } from '../../components/chart-widget/chart-widget.type';
import { DataTableComponent } from '../../components/data-table/data-table';
import { StatCardComponent } from '../../components/stat-card/stat-card';

@Component({
  selector: 'app-dashboard',
  imports: [StatCardComponent, ChartWidgetComponent, DataTableComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  recentTransactions = recentTransactions;
  private get isDarkTheme(): boolean {
    return document.documentElement.classList.contains('app-dark');
  }
  private getChartThemeColors() {
    const isDark = this.isDarkTheme;

    return {
      textColor: isDark ? '#e5e7eb' : '#374151',
      mutedTextColor: isDark ? '#9ca3af' : '#6b7280',
      gridColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)',
      tooltipTheme: isDark ? 'dark' : 'light',
    };
  }
  private buildStockValueChart(): ChartOptions {
    const theme = this.getChartThemeColors();
    return {
      series: [
        {
          name: 'Stock Value',
          data: [98, 112, 108, 126, 134, 142, 156],
        },
      ],
      chart: {
        type: 'line',
        height: 260,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        foreColor: theme.textColor,
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: Array(7).fill(theme.mutedTextColor),
          },
        },
      },
      yaxis: {
        labels: {
          formatter: (value) => `$${value}k`,
          style: {
            colors: [theme.mutedTextColor],
          },
        },
      },
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: theme.gridColor,
        strokeDashArray: 4,
      },
      tooltip: {
        theme: theme.tooltipTheme,
        y: {
          formatter: (value) => `$${value}k`,
        },
      },
      legend: {
        show: false,
      },
    };
  }

  topCategoriesChartOptions: ChartOptions = this.buildTopCategoriesChart();
  stockValueChartOptions: ChartOptions = this.buildStockValueChart();

  private buildTopCategoriesChart(): ChartOptions {
    const theme = this.getChartThemeColors();

    return {
      series: [
        {
          name: 'Items',
          data: [420, 360, 280, 210, 160],
        },
      ],
      chart: {
        type: 'bar',
        height: 260,
        toolbar: {
          show: false,
        },
        foreColor: theme.textColor,
      },
      xaxis: {
        categories: ['Electronics', 'Furniture', 'Office', 'Clothing', 'Food'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          rotate: -20,
          style: {
            colors: Array(5).fill(theme.mutedTextColor),
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: [theme.mutedTextColor],
          },
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: theme.gridColor,
        strokeDashArray: 4,
      },
      tooltip: {
        theme: theme.tooltipTheme,
        y: {
          formatter: (value) => `${value} items`,
        },
      },
      legend: {
        show: false,
      },
    };
  }
}
