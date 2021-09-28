import { ValidationError } from 'yup';
import { NativeModules } from 'react-native';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validatioErrors: Errors = {};

  err.inner.forEach(error => {
    validatioErrors[error.path] = error.message;
    NativeModules.ToastModules.show(error.message);
  });
  return validatioErrors;
}
