import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../_services";
import {CustomValidator} from "../../_helpers";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  error: any;
  emailPattern = '([\\da-zA-Z.-]+)\\@([\\da-zA-Z.-]+)\\.([\\da-zA-Z.-]{2,})[/\\w.-]*/?';

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      givenNames: ['', Validators.required],
      surname: ['', Validators.required],
      publicIdentifier: ['', Validators.required],
      password: ['', [
        // 1. Password Field is Required
        Validators.required,
        // 2. check whether the entered password has a number
        CustomValidator.patternValidator(/\d/, { hasNumber: true }),
        // 3. check whether the entered password has upper case letter
        CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        // 4. check whether the entered password has a lower-case letter
        CustomValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
        // 6. Has a minimum length of 8 characters
        Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      terms: ['', Validators.required],
    }, {
      // validator for the form group
      validator: CustomValidator.passwordMatchValidator
    });
  }

  get form() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) { return; }

    this.loading = true;
    this.authenticationService.registerAdmin(this.form.email.value, this.form.givenNames.value, this.form.surname.value, this.form.password.value, this.form.publicIdentifier.value).pipe(first()).subscribe(res => {
      this.loading = false;
      console.log(res);
    }, error => {
      this.submitted = false;
      this.loading = false;
      this.error = error;
      console.log(error);
    });
  }

}
