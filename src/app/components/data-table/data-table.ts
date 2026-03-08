import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
  rows = input.required<TransactionItem[]>();

  getSeverity(status: TransactionItem['status']): 'success' | 'warn' | 'danger' | 'secondary' {
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
}
