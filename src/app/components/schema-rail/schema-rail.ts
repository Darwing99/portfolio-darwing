import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { UI } from '../../data/ui-strings';

interface RailNode {
  id: string;
  label: typeof UI.nav.about;
}

@Component({
  selector: 'app-schema-rail',
  standalone: true,
  templateUrl: './schema-rail.html',
  styleUrl: './schema-rail.scss',
})
export class SchemaRail implements OnInit, OnDestroy {
  protected readonly i18n = inject(I18nService);

  protected readonly nodes: RailNode[] = [
    { id: 'about', label: UI.nav.about },
    { id: 'skills', label: UI.nav.skills },
    { id: 'projects', label: UI.nav.projects },
    { id: 'education', label: UI.nav.education },
    { id: 'certifications', label: UI.nav.certifications },
    { id: 'contact', label: UI.nav.contact },
  ];

  protected readonly activeId = signal<string>('about');
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    const sections = this.nodes
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeId.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((el) => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
