import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

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
  ngOnInit() {
    // restore theme preference on application start
    const saved = localStorage.getItem('theme');

    if (saved === 'dark') {
      this.isDark = true;
      document.documentElement.classList.add('app-dark');
    }
  }
}
