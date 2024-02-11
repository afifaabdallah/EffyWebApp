import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../shared/services/form.service';
import { User } from '../../shared/models/user.interface';
import { Project } from '../../shared/models/project.interface';
import { TravauxService } from '../../shared/services/travaux.service';

@Component({
  selector: 'app-project-informations',
  templateUrl: './project-informations.component.html',
  styleUrl: './project-informations.component.scss',
})
export class ProjectInformationsComponent implements OnInit {
  @Input() user!: User;
  @Output() newProjectEvent = new EventEmitter<User>();
  public formProject: FormGroup = this.fb.group({
    owner: ['', Validators.required],
    number_peoples: ['', Validators.required],
    household_income: ['', Validators.required],
    surface_area: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private travauxService: TravauxService
  ) {}
  ngOnInit(): void {
    this.formProject.valueChanges.subscribe((x) => {
      if (this.formProject.valid) {
        this.submit();
      }
    });
  }

  getErrorMessage(formControl: string) {
    return this.formService.getErrorMessage(this.formProject, formControl);
  }
  public submit() {
    this.user.project = this.formProject.getRawValue() as Project;
    this.user.project.primeEffy = this.travauxService.calculatePrimeEffy(
      this.user.project
    );
    this.newProjectEvent.emit(this.user);
  }
}
