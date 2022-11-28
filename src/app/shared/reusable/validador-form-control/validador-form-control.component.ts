import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validador-form-control',
  templateUrl: './validador-form-control.component.html',
  styleUrls: ['./validador-form-control.component.scss']
})
export class ValidadorFormControlComponent {
  @Input() control: AbstractControl;
  @Input() isSubmitted: boolean;
  @Input() element: HTMLInputElement;

  public static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    }
    else {
      return {
        invalidEmailAddress: true
      };
    }
  }
 
  public get errorMessage() {

    let message = null;
    let cssClassValid = 'is-valid';
    let cssClassInValid = 'is-invalid';

    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.isSubmitted) {
        message = this.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    if (this.isSubmitted && this.element != null) {

      if (this.element.classList.length > 0) {
        if (this.element.classList.contains(cssClassInValid)) {
          this.element.classList.remove(cssClassInValid);
        }
      }

      if (this.element.classList.length > 0) {
        if (this.element.classList.contains(cssClassValid)) {
          this.element.classList.remove(cssClassValid);
        }
      }

      if (message != null) {
        this.element.classList.add(cssClassInValid);
      }
      else {
        this.element.classList.add(cssClassValid);
      }
    }

    return message;
  }

  private getValidatorErrorMessage(validatorName: string, validatorValue?: any) {

    let error: string;
    let config = {
      required: 'El campo es requerido',
      emailValidator:
        'El formato no es correcto.',
      minlength: 'La longitud de la cadena no es válida',
      maxlength: 'La longitud de la cadena no es válida'
    };

    error = config[validatorName];

    if (error === undefined) {
      error = "El valor no es válido";
    }

    return error;
  }
}
