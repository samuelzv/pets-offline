import {Component} from 'angular2/core';
import {DemoMainComponent} from '../demo.main.component/demo.main.component';
import {DemoHeaderComponent} from '../demo.header.component/demo.header.component';
import {PetsApi} from '../services/petsApi';

@Component({
  directives:[DemoMainComponent, DemoHeaderComponent],
  selector: 'demo-app',
  template: `
    <div class="demo-app__header"> <h1>Register Pets</h1> </div>
    <demo-main></demo-main>
  `
})

export class DemoAppComponent {

  static get parameters() {
    return [ [PetsApi] ];
  }

  /*
  constructor(petsApi) {
    this._petsApi = petsApi;
  }
   */

  constructor(petsApi) {
    this._petsApi = petsApi;
  }

}
