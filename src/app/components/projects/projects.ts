import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PROJECTS } from '../../data/profile.data';
import { UI } from '../../data/ui-strings';
import { RevealDirective } from '../../core/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = UI;
  protected readonly projects = PROJECTS;
}
