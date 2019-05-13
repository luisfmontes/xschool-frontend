import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

import { ValidationService } from "./validation.service";

@Component({
  selector: "RNCR-validation-message",
  template: `
    <div *ngIf="this.ErrorMessage">{{ errorMessage }}</div>
  `
})
export class ValidationMessageComponent {
  errorMessage:string;

  @Input() control: FormControl;
  constructor() {}

  get ErrorMessage() {
    for (let propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        (this.control.touched || this.control.dirty)
      ) {
        this.errorMessage = ValidationService.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName]
        );
        return true;
      }
    }

    return false;
  }
}
