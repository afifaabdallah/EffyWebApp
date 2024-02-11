import { Injectable } from '@angular/core';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root',
})
export class TravauxService {
  constructor() {}
  calculateProjectCosts(project: Project): number {
    return project.surface_area * 80;
  }
  calculatePrimeEffy(project: Project): number {
    let prime =
      this.calculateProjectCosts(project) * 0.75 -
      (project.household_income / project.number_peoples) * 0.15;
    return prime;
  }
}
