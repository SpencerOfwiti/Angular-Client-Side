import {AbstractControl, ValidationErrors} from "@angular/forms";
import {ValidateFn} from "codelyzer/walkerFactory/walkerFn";

export class CustomValidator {
  static passwordMatchValidator(control: AbstractControl) {
    // get password from our password form control
    const password: string = control.get('password').value;
    // get password from our confirmPassword form control
    const confirmPassword: string = control.get('confirmPassword').value;
    // compare if the password match
    if (password !== confirmPassword) {
      // if they dont match, set an error in our confirmPassword form control
      control.get('confirmPassword').setErrors({ NoPasswordMatch: true });
    }
  }

  static patternValidator(regex: RegExp, error: ValidationErrors) {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regex supplied
      const valid = regex.test(control.value);

      // if true, return no error, else return error passed in the second parameter
      return valid ? null: error;
    };
  }
}
