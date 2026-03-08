import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-stat-card',
  imports: [CardModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCardComponent {
  title = input.required<string>();
  value = input.required<string>();
  subtitle = input<string>('');
  icon = input<string>('');
  iconColor = input<string>('var(--p-primary-color)');
}
