import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

export type TransactionItem = {
  date: string;
  product: string;
  type: 'Incoming' | 'Outgoing';
  quantity: number;
  value: string;
  status: 'Completed' | 'Pending' | 'Cancelled';
};

export type StockOverviewItem = {
  product: string;
  category: string;
  inStock: number;
  incoming: number;
  outgoing: number;
  trend: 'Up' | 'Stable' | 'Down';
};

type TableVariant = 'transactions' | 'stock-overview';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CardModule, TableModule, TagModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent {
  title = input.required<string>();
  variant = input<TableVariant>('transactions');
  rows = input.required<TransactionItem[] | StockOverviewItem[]>();

  transactionsRows = computed(() => this.rows() as TransactionItem[]);
  stockOverviewRows = computed(() => this.rows() as StockOverviewItem[]);

  getStatusSeverity(
    status: TransactionItem['status'],
  ): 'success' | 'warn' | 'danger' | 'secondary' {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Pending':
        return 'warn';
      case 'Cancelled':
        return 'danger';
      default:
        return 'secondary';
    }
  }

  getTrendSeverity(trend: StockOverviewItem['trend']): 'success' | 'warn' | 'danger' | 'secondary' {
    switch (trend) {
      case 'Up':
        return 'success';
      case 'Stable':
        return 'secondary';
      case 'Down':
        return 'danger';
      default:
        return 'secondary';
    }
  }
}
