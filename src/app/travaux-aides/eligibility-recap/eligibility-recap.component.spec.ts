import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityRecapComponent } from './eligibility-recap.component';
import { User } from '../../shared/models/user.interface';
import { Project } from '../../shared/models/project.interface';
import { MatCardModule } from '@angular/material/card';
import { CivilityGenderPipe } from '../../shared/pipes/civility-gender.pipe';

describe('EligibilityRecapComponent', () => {
  let component: EligibilityRecapComponent;
  let fixture: ComponentFixture<EligibilityRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EligibilityRecapComponent, CivilityGenderPipe],
      imports: [MatCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EligibilityRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Initial values', () => {
    it('should initialize primeEffy to 0', () => {
      expect(component.primeEffy).toBe(0);
    });

    it('should initialize isElligble to false', () => {
      expect(component.isElligble).toBe(false);
    });
  });

  describe('Input binding', () => {
    it('should bind user input', () => {});
  });
});
