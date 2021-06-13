import { FormEditData } from './form-edit-data.model';
import { FormGroup, FormControl } from '@ngneat/reactive-forms';
import { Name } from './components/interfaces/name';

export function formData(): FormGroup<FormEditData> {
  return new FormGroup<FormEditData>(
    {
      name: new FormControl<Name>({
       vorname: undefined,
  	   nachname: undefined,
      }),
    });
};
