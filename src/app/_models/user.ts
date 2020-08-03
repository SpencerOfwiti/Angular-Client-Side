import {Role} from "./role";

export class RegisterUser {
  id: number;
  givenNames: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: any;
  idType: string;
  idValue: string;
  password: string;
  signupMethod: string;
  publicIdentifier: string;
  role: Role;
}
