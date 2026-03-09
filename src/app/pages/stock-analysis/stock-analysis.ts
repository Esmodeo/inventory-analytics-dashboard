import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { stockOverviewRows } from '../../assets/mocks/stock-overview-data';
import { ChartWidgetComponent } from '../../components/chart-widget/chart-widget';
import { ChartOptions } from '../../components/chart-widget/chart-widget.type';
import { DataTableComponent } from '../../components/data-table/data-table';
import { StatCardComponent } from '../../components/stat-card/stat-card';
import { ChartThemeService } from '../../services/chart-theme.service';

@Component({
  selector: 'app-stock-analysis',
  imports: [
    ChartWidgetComponent,
    StatCardComponent,
    DataTableComponent,
    DatePickerModule,
    SelectModule,
    ButtonModule,
  ],
  templateUrl: './stock-analysis.html',
  styleUrl: './stock-analysis.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockAnalysisComponent {
  stockOverviewRows = stockOverviewRows;
  readonly categoryOptions = [
    { label: 'All Categories', value: 'all' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Furniture', value: 'furniture' },
    { label: 'Office Supplies', value: 'office' },
    { label: 'Apparel', value: 'apparel' },
  ];
  readonly warehouseOptions = [
    { label: 'All Warehouses', value: 'all' },
    { label: 'Central', value: 'central' },
    { label: 'Hub', value: 'hub' },
    { label: 'Storage', value: 'storage' },
    { label: 'Port', value: 'port' },
  ];
  private readonly chartThemeService = inject(ChartThemeService);

  private buildStockMovementChart(): ChartOptions {
    const theme = this.chartThemeService.getChartThemeColors();

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

  readonly stockMovementChartOptions = computed<ChartOptions>(() => this.buildStockMovementChart());
}
