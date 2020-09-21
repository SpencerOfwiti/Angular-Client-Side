import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../_services";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  returnUrl: string;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // reset login status
    this.authenticationService.logout();

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: [''],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get form() { return this.loginForm.controls; }

  onSubmit(): any {
    this.submitted = true;

    if (this.loginForm.invalid) { return; }

    this.loading = true;
    this.authenticationService.loginAdmin(this.form.email.value, this.form.password.value)
      .pipe(first()).subscribe(res => {
      this.loading = false;
      if (this.returnUrl !== '/') {
        this.router.navigate([this.returnUrl]);
      } else {
        this.router.navigate(['/']);
      }
    }, error => {
        this.submitted = false;
        this.loading = false;
        this.error = error;
        console.log(error);
    });
  }

}
