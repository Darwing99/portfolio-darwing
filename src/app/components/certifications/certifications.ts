import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { CERTIFICATIONS } from '../../data/profile.data';
import { UI } from '../../data/ui-strings';
import { RevealDirective } from '../../core/scroll-reveal.directive';
import { Icon } from '../icon/icon';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [RevealDirective, Icon, SectionHeader],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = UI;
  protected readonly items = CERTIFICATIONS;
}
