import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stock-analysis',
  standalone: true,
  imports: [],
  templateUrl: './stock-analysis.html',
  styleUrl: './stock-analysis.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockAnalysisComponent {}
