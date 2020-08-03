import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Role} from "../_models";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  get isLoggedIn() { return !!localStorage.getItem('currentUser'); }

  get isAdmin() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.role === Role.Admin;
  }

  registerAdmin(email: string, givenNames: string, surname: string, password: string, publicIdentifier: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/auth/register`,
      {
        email: email,
        givenNames: givenNames,
        surname: surname,
        password: password,
        signupMethod: "WEB",
        publicIdentifier: publicIdentifier,
        role: Role.Admin,
      }
    ).pipe(map(response => {
      return response;
    }));
  }

  registerClient(givenNames: string, surname: string, phone: string, idType: string, idValue: string, password: string, publicIdentifier: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/auth/register`,
      {
        givenNames: givenNames,
        surname: surname,
        phone: phone,
        idType: idType,
        idValue: idValue,
        password: password,
        signupMethod: "WEB",
        publicIdentifier: publicIdentifier,
      }
    ).pipe(map(response => {
      return response;
    }));
  }

  loginClient(msisdn: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/auth/login`,
      {
        msisdn: msisdn,
        password: password,
      }
    ).pipe(map(user => {
      // login successful if there is a jwt token in the response
      if (user && user.authentication_token) {
        // store user details and jwt token in localStorage to keep under logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        console.log('Response:', user.message);
      }
      return user;
    }));
  }

  loginAdmin(email: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/auth/login`,
      {
        email: email,
        password: password,
      }
    ).pipe(map(user => {
      // login successful if there is a jwt token in the response
      if (user && user.authentication_token) {
        // store user details and jwt token in localStorage to keep under logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        console.log('Response:', user.message);
      }
      return user;
    }));
  }

  activateAdmin(activation_token: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/auth/activate_user`,
      { activation_token: activation_token }
    ).pipe(map(response => {
      return response;
    }));
  }

  logout(): Observable<any> {
    // remove user form localStorage to log user out
    localStorage.removeItem('currentUser');
    return this.http.post<any>(
      `${environment.apiUrl}/auth/logout`,
      { action: "logout" }
    ).pipe(map(response => {
      return response;
    }));
  }

  requestPasswordReset(email: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/auth/request_password_reset_email`,
      { email: email }
    ).pipe(map(response => {
      return response;
    }));
  }

  resetPassword(new_password: string, password_reset_token: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/auth/reset_password`,
      {
        new_password: new_password,
        password_reset_token: password_reset_token
      }
    ).pipe(map(response => {
      return response;
    }));
  }

  resendOtp(phone: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/auth/resend_otp`,
      { phone: phone }
    ).pipe(map(response => {
      return response;
    }));
  }

  verifyOtp(phone: string, otp: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/auth/verify_otp`,
      {
        phone: phone,
        otp: otp,
        otp_expiry_interval: 3600
      }
    ).pipe(map(response => {
      return response;
    }));
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/users`
    ).pipe(map(response => {
      return response;
    }));
  }
}
