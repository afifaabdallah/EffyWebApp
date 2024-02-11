import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInformationsComponent } from './user-informations.component';

describe('UserInformationsComponent', () => {
  let component: UserInformationsComponent;
  let fixture: ComponentFixture<UserInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInformationsComponent],
      imports: [
        MatCardModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize formUser with default values', () => {
    expect(component.formUser.value).toEqual({
      civil_status: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      email_address: '',
    });
  });

  describe('Form Validation', () => {
    it('should be invalid when the form is empty', () => {
      expect(component.formUser.valid).toBeFalsy();
    });

    it('should be invalid when civil_status is not selected', () => {
      component.formUser.patchValue({
        first_name: 'John',
        last_name: 'Doe',
        phone_number: '1234567890',
        email_address: 'john@example.com',
      });
      expect(component.formUser.valid).toBeFalsy();
    });

    it('should be invalid when any required field is not filled', () => {
      component.formUser.patchValue({
        civil_status: 'mr',
        first_name: '',
        last_name: 'Doe',
        phone_number: '1234567890',
        email_address: 'john@example.com',
      });
      expect(component.formUser.valid).toBeFalsy();
    });

    it('should be valid when all required fields are filled', () => {
      component.formUser.patchValue({
        civil_status: 'mr',
        first_name: 'John',
        last_name: 'Doe',
        phone_number: '1234567890',
        email_address: 'john@example.com',
      });
      expect(component.formUser.valid).toBeTruthy();
    });
  });
});
