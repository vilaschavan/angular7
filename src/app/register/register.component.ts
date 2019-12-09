import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RegistrationDetailsService } from '../services/registration-details.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  public ownerForm: FormGroup;
  submitted = false;
  error: string;

  constructor(private formBuilder: FormBuilder, private Registration: RegistrationDetailsService) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl(new Date()),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  public createOwner() {
    if (this.ownerForm.valid) {
      alert('Form Data!! :-)\n\n' + JSON.stringify(this.ownerForm.value));
      this.submitted = true;

      this.Registration.registerdetails(this.ownerForm.value)
        .subscribe(
          res => {
            alert('Data Added Successfully');
            console.log(res);
          },
          error => {
            this.error = error;
          }
        );
      this.ownerForm.reset();
    }
  }

}
