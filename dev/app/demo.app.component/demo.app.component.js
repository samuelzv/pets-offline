import {Component, provide} from 'angular2/core';
import {AppStore, appStore} from '../stores/appStore';
import {DemoMainComponent} from '../demo.main.component/demo.main.component';
import {DemoHeaderComponent} from '../demo.header.component/demo.header.component';
import {PetsApiService} from '../services/petsApiService';
import {NetworkStatusService} from '../services/networkStatusService';
import {NetworkStatusDispatcher} from '../services/networkStatusDispatcher';
import {NetworkStatusActions} from '../actions/networkStatusActions';

@Component({
  directives:[DemoMainComponent, DemoHeaderComponent],
  selector: 'demo-app',
  providers: [provide(AppStore, {useValue: appStore}), PetsApiService, NetworkStatusService, NetworkStatusDispatcher, NetworkStatusActions ],
  template: `
    <div class="demo-app__header"> <h1>Register Pets</h1> </div>
    <demo-main></demo-main>
  `
})

export class DemoAppComponent {

  static get parameters() {
    return [ [AppStore], [PetsApiService], [NetworkStatusService], [NetworkStatusDispatcher] ];
  }

  /*
  constructor(petsApi) {
    this._petsApi = petsApi;
  }
   */

  constructor(appStore, petsApiService, networkStatusServices, networkStatusDispatcher ) {
    this._appStore = appStore;
    this._petsApiService = petsApiService;
    this._networkStatusServices = networkStatusServices;
    //this._networkStatusDispatcher = networkStatusDispatcher;
  }


  ngOnInit() {
    // we subscribe to store events
    this._appStore.subscribe(()=> {
      this.state = this._appStore.getState();
    });

  }

}
