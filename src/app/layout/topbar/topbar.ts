import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  imports: [ButtonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent implements OnInit {
  isDark = false;
  // Toggles application theme. Applies a class to the root html element and persists the preference in localStorage.
  toggleDarkMode() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('app-dark');
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
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
  ngOnInit() {
    // restore theme preference on application start
    const saved = localStorage.getItem('theme');

    if (saved === 'dark') {
      this.isDark = true;
      document.documentElement.classList.add('app-dark');
    }
  }
}
