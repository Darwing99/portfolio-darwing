import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { EDUCATION } from '../../data/profile.data';
import { UI } from '../../data/ui-strings';
import { RevealDirective } from '../../core/scroll-reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = UI;
  protected readonly items = EDUCATION;
}
