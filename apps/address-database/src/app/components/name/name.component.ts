import { Name } from './../interfaces/name';
import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup } from '@ngneat/reactive-forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'address-database-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NameComponent,
      multi: true
    }
  ]
})

export class NameComponent extends ControlValueAccessor<Name> implements OnInit {

  public headerMessage = 'Meine Address Database';
  readonly namen = new FormGroup<Name>(
    new FormControlundefined, undefined);

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.namen.value$.subscribe((newValue) => {
        this.onChange?.(newValue);
        this.onTouched?.();
    });
}

  writeValue(value: Name): void {
      this.namen.setValue(value);
  }

}
