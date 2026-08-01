import { Component, inject, Input } from '@angular/core';
import { I18nService, LocalizedText } from '../../core/i18n.service';
import { RevealDirective } from '../../core/scroll-reveal.directive';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './section-header.html',
})
export class SectionHeader {
  @Input({ required: true }) eyebrow!: LocalizedText;
  @Input({ required: true }) title!: LocalizedText;
  @Input() lead?: LocalizedText;

  protected readonly i18n = inject(I18nService);
}
