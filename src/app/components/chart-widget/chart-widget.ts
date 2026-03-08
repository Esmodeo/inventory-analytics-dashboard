import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexLegend,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { CardModule } from 'primeng/card';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis?: ApexYAxis;
  stroke?: ApexStroke;
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  tooltip?: ApexTooltip;
  legend?: ApexLegend;
  title?: ApexTitleSubtitle;
  labels?: string[];
};

@Component({
  selector: 'app-chart-widget',
  standalone: true,
  imports: [NgApexchartsModule, CardModule],
  templateUrl: './chart-widget.html',
  styleUrl: './chart-widget.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartWidgetComponent {
  title = input.required<string>();
  chartOptions = input.required<ChartOptions>();
  protected readonly defaultYAxis: ApexYAxis = {};
  protected readonly defaultStroke: ApexStroke = {};
  protected readonly defaultDataLabels: ApexDataLabels = { enabled: false };
  protected readonly defaultGrid: ApexGrid = {};
  protected readonly defaultTooltip: ApexTooltip = {};
  protected readonly defaultLegend: ApexLegend = {};
  protected readonly defaultTitle: ApexTitleSubtitle = {};
  protected readonly defaultLabels: string[] = [];
}
