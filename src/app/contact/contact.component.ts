import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { emailValidator, matchingPasswords } from '../shared/validators/validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public formSubmitted = false;
  private initialValue;
  registrationForm: FormGroup;

  ngOnInit() {
  }

  constructor(public fb: FormBuilder) {
    // Example use of FormBuilder, FormGroups, and FormControls
    this.registrationForm = fb.group({
      dob: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, emailValidator])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    }, { validator: matchingPasswords('password', 'confirmPassword') });

    this.initialValue = this.registrationForm.value;

  }

  submitRegistration(value, formDirective: FormGroupDirective): void {
    this.formSubmitted = true;

    alert('Form Data!! :-)\n\n' + JSON.stringify(value));
    console.log(value);

    formDirective.resetForm();
    this.registrationForm.reset();
  }

  reset() {
    this.registrationForm.reset();
  }

}
