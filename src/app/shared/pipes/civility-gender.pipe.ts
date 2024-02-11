import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'civilityGender',
})
export class CivilityGenderPipe implements PipeTransform {
  transform(gender: string): string {
    let civilityGender: string = '';
    civilityGender = gender == 'mr' ? 'monsieur' : 'madame';
    return ` ${civilityGender}`;
  }
}
