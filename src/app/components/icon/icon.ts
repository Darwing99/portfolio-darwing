import { Component, Input } from '@angular/core';

export type IconName =
  | 'mail'
  | 'linkedin'
  | 'github'
  | 'arrow-right'
  | 'download'
  | 'check'
  | 'clock'
  | 'eye'
  | 'server'
  | 'code'
  | 'database'
  | 'workflow'
  | 'wrench';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  @Input({ required: true }) name!: IconName;
}
