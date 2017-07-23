import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import '../../../imports/api/files';
import angularMeteor from 'angular-meteor';


@Component({
  selector: 'app-root',
  template: '<ul><li *ngFor="let item of myData | async"> {{ item }} </li></ul>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData: Observable<any>;
  constructor() {
    this.myData = myFiles.find({});
  }
}
