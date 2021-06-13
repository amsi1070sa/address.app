import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@ngneat/reactive-forms';
import { Observable, ReplaySubject } from 'rxjs';
import { Name } from './components/interfaces/name';
import { formData } from './form-edit-data';
import { FormEditData } from './form-edit-data.model';


@Component({
  selector: 'address-database-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'Address Database';

  taskData!: FormGroup<FormEditData>;
  // nameData$: Observable<Name>;


  ngOnInit(): void {
    // this.nameData$.subscribe((value) =>
    //   vorname: undefined,
    //   nachname: undefined,
    // });

    this.taskData = formData();
  }
}
