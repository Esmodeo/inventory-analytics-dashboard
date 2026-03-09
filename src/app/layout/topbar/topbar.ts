import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  output,
  signal,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChartThemeService } from '../../services/chart-theme.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  imports: [ButtonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  readonly closeSidebarEvent = output<boolean>();
  isSidebarClosed = signal<boolean>(false);
  readonly themeService = inject(ChartThemeService);

  closeSidebar() {
    this.isSidebarClosed.set(!this.isSidebarClosed());
    this.closeSidebarEvent.emit(this.isSidebarClosed());
  }

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);

  title = '';

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let current = this.route.firstChild;

          while (current?.firstChild) {
            current = current.firstChild;
          }

          return current?.snapshot.data;
        }),
      )
      .subscribe((data) => {
        this.title = data?.['title'] ?? 'Dashboard';
        this.cdr.markForCheck();
      });
  }
}
