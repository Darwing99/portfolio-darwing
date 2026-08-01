import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { SKILL_GROUPS } from '../../data/profile.data';
import { UI } from '../../data/ui-strings';
import { RevealDirective } from '../../core/scroll-reveal.directive';
import { Icon, IconName } from '../icon/icon';
import { SectionHeader } from '../section-header/section-header';

const GROUP_ICONS: Record<string, IconName> = {
  backend: 'server',
  frontend: 'code',
  data: 'database',
  integrations: 'workflow',
  tools: 'wrench',
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective, Icon, SectionHeader],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = UI;
  protected readonly groups = SKILL_GROUPS;

  protected iconFor(groupId: string): IconName {
    return GROUP_ICONS[groupId] ?? 'wrench';
  }
}
