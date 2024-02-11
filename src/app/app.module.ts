import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TravauxAidesComponent } from './travaux-aides/travaux-aides.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './shared/modules/layout.module';
import { CoreModule } from './shared/modules/core.module';
import { UserInformationsComponent } from './travaux-aides/user-informations/user-informations.component';
import { ProjectInformationsComponent } from './travaux-aides/project-informations/project-informations.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { EligibilityRecapComponent } from './travaux-aides/eligibility-recap/eligibility-recap.component';
import { CivilityGenderPipe } from './shared/pipes/civility-gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TravauxAidesComponent,
    UserInformationsComponent,
    ProjectInformationsComponent,
    EligibilityRecapComponent,
    CivilityGenderPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    CoreModule,
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: '#003250' },
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
