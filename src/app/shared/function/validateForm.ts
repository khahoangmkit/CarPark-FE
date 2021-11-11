import {FormGroup} from "@angular/forms";

export function isFormErrorNotNull(form: FormGroup): boolean {
  let isError = false;
  Object.keys(form.controls).forEach((key) => {

    const controlError = form.get(key)?.errors;
    if (controlError !== null) {
      isError = true;
    }
  });
  return isError;
}
