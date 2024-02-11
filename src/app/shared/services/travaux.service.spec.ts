import { TestBed } from '@angular/core/testing';
import { TravauxService } from './travaux.service';

describe('TravauxService', () => {
  let service: TravauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculateProjectCosts', () => {
    it('should calculate project costs based on surface area', () => {
      const project = { surface_area: 150 } as any;
      const result = service.calculateProjectCosts(project);
      expect(result).toBe(150 * 80);
    });
  });

  describe('calculatePrimeEffy', () => {
    it('should calculate prime effy based on project costs and household income', () => {
      const project = {
        surface_area: 150,
        household_income: 30000,
        number_peoples: 3,
      } as any;

      // Mocking the calculateProjectCosts method
      spyOn(service, 'calculateProjectCosts').and.returnValue(1200);

      const result = service.calculatePrimeEffy(project);
      const expectedPrime = 1200 * 0.75 - (30000 / 3) * 0.15;
      expect(result).toBe(expectedPrime);
    });
  });
});
