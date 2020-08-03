import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Role} from "../_models";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  createMasterOrganization(name: string, address: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/organization`,
      {
        name: name,
        is_master: true,
        address: address
      }
    ).pipe(map(response => {
      return response;
    }));
  }

  createNonMasterOrganization(name: string): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/organization`,
      {
        name: name,
        configurations: {
          access_control_type: "STANDARD_ACCESS_CONTROL",
          access_roles: [Role.Admin, Role.Client]
        }
      }
    ).pipe(map(response => {
      return response;
    }));
  }

  getAllOrganizations(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/organization`
    ).pipe(map(response => {
      return response;
    }));
  }

  getSpecificOrganization(id: number): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/organization/${id}`
    ).pipe(map(response => {
      return response;
    }));
  }
}
