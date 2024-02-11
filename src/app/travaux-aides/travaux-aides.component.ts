import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  StepperOrientation,
  MatStepperModule,
} from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import { UserInformationsComponent } from './user-informations/user-informations.component';
import { User } from '../shared/models/user.interface';
@Component({
  selector: 'app-travaux-aides',
  templateUrl: './travaux-aides.component.html',
  styleUrls: ['./travaux-aides.component.scss'],
})
export class TravauxAidesComponent {
  @ViewChild('userInformationsComponent', { static: false })
  userInformationsComponent!: UserInformationsComponent;

  @ViewChild('projectInformationsComponent', { static: false })
  projectInformationsComponent!: UserInformationsComponent;

  @ViewChild('recapComponent', { static: false })
  recapComponent!: UserInformationsComponent;
  user!: User;
  titleHeader: string =
    'Vos travaux d’économies d’énergie pris en charge jusqu’à 80 % !';
  stepperOrientation: Observable<StepperOrientation>;
  constructor(breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  getUser(user: any) {
    this.user = user;
  }
  getProject(user: any) {
    this.user = user;
  }
}
