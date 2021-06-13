import { Name } from './../interfaces/name';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup } from '@ngneat/reactive-forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'address-database-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NameComponent,
      multi: true
    }
  ]
})

export class NameComponent extends ControlValueAccessor<Name> implements OnInit, OnDestroy {

  public headerMessage = 'Meine Address Database';
  readonly nameForm = new FormGroup<Name>({
    vorname: new FormControl<string | undefined> (),
    nachname: new FormControl<string | undefined> (),
  });

  private readonly destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.nameForm.value$.pipe(takeUntil(this.destroy$)).subscribe((name) => {
        this.onChange?.(name);
        this.onTouched?.();
    });
}

  writeValue(name: Name): void {
      this.nameForm.setValue(name);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
}

}

