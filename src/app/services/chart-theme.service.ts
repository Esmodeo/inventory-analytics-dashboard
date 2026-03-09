import { Injectable, computed, signal } from '@angular/core';

export interface ChartThemeColors {
  textColor: string;
  mutedTextColor: string;
  gridColor: string;
  tooltipTheme: 'dark' | 'light';
}

@Injectable({
  providedIn: 'root',
})
export class ChartThemeService {
  private readonly isDarkThemeSignal = signal<boolean>(false);
  readonly isDarkTheme = this.isDarkThemeSignal.asReadonly();
  readonly chartThemeColors = computed<ChartThemeColors>(() => {
    const isDark = this.isDarkThemeSignal();

    return {
      textColor: isDark ? '#e5e7eb' : '#374151',
      mutedTextColor: isDark ? '#9ca3af' : '#6b7280',
      gridColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)',
      tooltipTheme: isDark ? 'dark' : 'light',
    };
  });

  constructor() {
    this.initializeTheme();
  }

  initializeTheme(): void {
    const savedTheme = this.readSavedTheme();
    this.setDarkTheme(savedTheme === 'dark');
  }

  toggleTheme(): void {
    this.setDarkTheme(!this.isDarkThemeSignal());
  }

  setDarkTheme(isDark: boolean): void {
    this.isDarkThemeSignal.set(isDark);

    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('app-dark', isDark);
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }

  private readSavedTheme(): 'dark' | 'light' {
    if (typeof localStorage === 'undefined') {
      return 'light';
    }

    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  }

  getChartThemeColors(): ChartThemeColors {
    return this.chartThemeColors();
  }
}
