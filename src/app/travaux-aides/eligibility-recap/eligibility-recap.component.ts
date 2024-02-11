import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/user.interface';

@Component({
  selector: 'app-eligibility-recap',
  templateUrl: './eligibility-recap.component.html',
  styleUrl: './eligibility-recap.component.scss',
})
export class EligibilityRecapComponent {
  @Input() user!: User;
  primeEffy: number = 0;
  isElligble: boolean = false;
  constructor() {}
}
