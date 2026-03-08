import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartOptions, ChartWidgetComponent } from '../../components/chart-widget/chart-widget';
import { DataTableComponent, StockOverviewItem } from '../../components/data-table/data-table';
import { StatCardComponent } from '../../components/stat-card/stat-card';

@Component({
  selector: 'app-stock-analysis',
  standalone: true,
  imports: [ChartWidgetComponent, StatCardComponent, DataTableComponent],
  templateUrl: './stock-analysis.html',
  styleUrl: './stock-analysis.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockAnalysisComponent {
  stockMovementChartOptions: ChartOptions = {
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
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}`,
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
      strokeDashArray: 4,
    },
    tooltip: {
      y: {
        formatter: (value) => `${value} units`,
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
    },
  };
  stockOverviewRows: StockOverviewItem[] = [
    {
      product: 'Wireless Mouse',
      category: 'Electronics',
      inStock: 148,
      incoming: 48,
      outgoing: 22,
      trend: 'Up',
    },
    {
      product: 'Office Chair',
      category: 'Furniture',
      inStock: 64,
      incoming: 12,
      outgoing: 18,
      trend: 'Down',
    },
    {
      product: 'USB-C Hub',
      category: 'Accessories',
      inStock: 93,
      incoming: 35,
      outgoing: 16,
      trend: 'Up',
    },
    {
      product: 'Standing Desk',
      category: 'Furniture',
      inStock: 27,
      incoming: 6,
      outgoing: 11,
      trend: 'Stable',
    },
    {
      product: 'Mechanical Keyboard',
      category: 'Electronics',
      inStock: 58,
      incoming: 14,
      outgoing: 19,
      trend: 'Down',
    },
  ];
}
