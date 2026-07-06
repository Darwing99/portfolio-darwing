import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PROFILE } from '../../data/profile.data';
import { UI } from '../../data/ui-strings';
import { RevealDirective } from '../../core/scroll-reveal.directive';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = UI;
  protected readonly profile = PROFILE;

  protected readonly typedLine = signal('');
  protected readonly showCursorBlink = signal(true);
  protected readonly done = signal(false);

  private timeoutId?: ReturnType<typeof setTimeout>;

  private readonly fullScript = [
    "CREATE PROFILE darwing_hernandez (",
    "  role        VARCHAR := 'Full Stack Developer',",
    "  stack       ARRAY   := ['.NET 8', 'Angular', 'SQL Server', 'Power BI'],",
    "  based_in    VARCHAR := 'Honduras',",
    "  looking_for VARCHAR := 'Remote / worldwide opportunities'",
    ");",
  ].join('\n');

  ngOnInit(): void {
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.typedLine.set(this.fullScript);
      this.done.set(true);
      return;
    }

    this.typeScript(0);
  }

  ngOnDestroy(): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private typeScript(index: number): void {
    if (index > this.fullScript.length) {
      this.done.set(true);
      return;
    }
    this.typedLine.set(this.fullScript.slice(0, index));
    const char = this.fullScript[index - 1];
    const delay = char === '\n' ? 120 : 14 + Math.random() * 18;
    this.timeoutId = setTimeout(() => this.typeScript(index + 1), delay);
  }
}
