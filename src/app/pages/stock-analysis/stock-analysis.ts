import { ChangeDetectionStrategy, Component } from '@angular/core';
import { stockOverviewRows } from '../../assets/mocks/stock-overview-data';
import { ChartWidgetComponent } from '../../components/chart-widget/chart-widget';
import { ChartOptions } from '../../components/chart-widget/chart-widget.type';
import { DataTableComponent } from '../../components/data-table/data-table';
import { StatCardComponent } from '../../components/stat-card/stat-card';

@Component({
  selector: 'app-stock-analysis',
  imports: [ChartWidgetComponent, StatCardComponent, DataTableComponent],
  templateUrl: './stock-analysis.html',
  styleUrl: './stock-analysis.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockAnalysisComponent {
  stockOverviewRows = stockOverviewRows;
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

  private buildStockMovementChart(): ChartOptions {
    const theme = this.getChartThemeColors();

    return {
      series: [
        {
          name: 'Incoming',
          data: [120, 142, 138, 156, 168, 172, 181],
        },
        {
          name: 'Outgoing',
          data: [95, 110, 104, 121, 129, 134, 140],
        },
      ],
      chart: {
        type: 'area',
        height: 360,
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
          formatter: (value) => `${value}`,
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
          formatter: (value) => `${value} units`,
        },
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        labels: {
          colors: theme.textColor,
        },
      },
    };
  }

  stockMovementChartOptions: ChartOptions = this.buildStockMovementChart();
}
