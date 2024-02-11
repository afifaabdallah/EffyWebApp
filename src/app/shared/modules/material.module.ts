import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';

const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  CdkStepperModule,
  MatStepperModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule {}
