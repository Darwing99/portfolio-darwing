import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { EDUCATION, PROFILE, PROJECTS } from '../../data/profile.data';
import { UI } from '../../data/ui-strings';
import { RevealDirective } from '../../core/scroll-reveal.directive';
import { Icon } from '../icon/icon';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective, Icon, SectionHeader],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = UI;
  protected readonly profile = PROFILE;
  protected readonly projectCount = PROJECTS.length;
  protected readonly honors = EDUCATION[0].honor;
}
