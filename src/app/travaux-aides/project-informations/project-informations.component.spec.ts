import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectInformationsComponent } from './project-informations.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

describe('ProjectInformationsComponent', () => {
  let component: ProjectInformationsComponent;
  let fixture: ComponentFixture<ProjectInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectInformationsComponent],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit new project event on form submission', () => {
    spyOn(component.newProjectEvent, 'emit');
    const project = {
      surface_area: 150,
      household_income: 30000,
      number_peoples: 3,
    } as any;
    const user = {
      civil_status: 'mr',
      first_name: 'John',
      last_name: 'Doe',
      phone_number: '1234567890',
      email_address: 'john@example.com',
      project: project,
    };
    component.user = user;

    // Simulate form submission
    component.formProject.setValue({
      owner: 'owner',
      number_peoples: 3,
      household_income: 50000,
      surface_area: 100,
    });
    component.submit();

    expect(component.newProjectEvent.emit).toHaveBeenCalledWith(user);
  });
});
