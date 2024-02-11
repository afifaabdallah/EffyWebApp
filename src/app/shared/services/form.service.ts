import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}
  getErrorMessage(form: FormGroup, formControl: string) {
    let formControlArray: { [key: string]: string } = {
      civil_status: 'votre civilité',
      last_name: 'votre nom',
      first_name: 'votre prénom',
      email_address: 'votre email',
      phone_number: 'votre numero de téléphone',
      owner: 'votre situation',
      number_peoples: 'votre foyer',
      household_income: 'vos revenus',
      surface_area: 'votre foyer',
    };
    if (form.get(formControl)?.hasError('required')) {
      return `Veuillez renseigner  ${formControlArray[formControl]} `;
    }
    return form.get(formControl)
      ? `${formControlArray[formControl]} n'est pas valide`
      : '';
  }
}
