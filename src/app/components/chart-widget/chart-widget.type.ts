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
} from 'ng-apexcharts';

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
