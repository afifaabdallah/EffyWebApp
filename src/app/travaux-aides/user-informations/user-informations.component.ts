import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../shared/services/form.service';
import { User } from '../../shared/models/user.interface';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrl: './user-informations.component.scss',
})
export class UserInformationsComponent implements OnInit {
  @Output() newUserEvent = new EventEmitter<User>();
  user!: User;
  public formUser: FormGroup = this.fb.group({
    civil_status: ['', Validators.required],
    last_name: ['', Validators.required],
    first_name: ['', Validators.required],
    email_address: ['', [Validators.required, Validators.email]],
    phone_number: ['', [Validators.required, Validators.pattern('[0-9 ]{10}')]],
  });
  constructor(private fb: FormBuilder, private formService: FormService) {}
  ngOnInit(): void {
    this.formUser.valueChanges.subscribe((x) => {
      let project = this.user?.project;
      if (this.formUser.valid) {
        this.user = this.formUser.getRawValue() as User;
        this.user.project = project;
        this.newUserEvent.emit(this.user);
      }
    });
  }
  getErrorMessage(formControl: string) {
    return this.formService.getErrorMessage(this.formUser, formControl);
  }

  public submit() {
    this.user = this.formUser.getRawValue() as User;
    this.newUserEvent.emit(this.user);
  }
}
