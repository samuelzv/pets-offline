import {Component, provide, View, NgZone} from 'angular2/core';
import {AppStore, appStore} from '../stores/appStore';
//import {DemoMainComponent} from '../demo.main.component/demo.main.component';
import {DemoHeaderComponent} from '../demo.header.component/demo.header.component';
import {PetsApiService} from '../services/petsApiService';
import {NetworkStatusService} from '../services/networkStatusService';
import {NetworkStatusDispatcher} from '../services/networkStatusDispatcher';
import {NetworkStatusActions} from '../actions/networkStatusActions';
import {PetActions} from '../actions/petActions';

@Component({
  directives:[/*DemoMainComponent,*/ DemoHeaderComponent],
  selector: 'demo-app',
  providers: [provide(AppStore, {useValue: appStore}), PetsApiService, NetworkStatusService,
    NetworkStatusDispatcher, NetworkStatusActions, PetActions ],
  templateUrl: './demo.app.component/templates/demo.app.component.html' /*,
  template: `
    <div class="demo-app__header"> <h1>Register Pets</h1> </div>
    <demo-main></demo-main>
  ` */
})

export class DemoAppComponent {

  static get parameters() {
    return [ [AppStore], [PetsApiService], [NetworkStatusService], [NetworkStatusDispatcher], [PetActions], [NgZone] ];
  }

  constructor(appStore, petsApiService, networkStatusServices, networkStatusDispatcher, petActions, ngZone ) {
    this._appStore = appStore;
    this._petsApiService = petsApiService;
    this._networkStatusServices = networkStatusServices;
    this._networkStatusDispatcher = networkStatusDispatcher;
    this._petActions = petActions;
    this._ngZone = ngZone;

    this.state = {};
  }


  ngOnInit() {
    // TODO extract of root reducer

    // we subscribe to store events
    this._appStore.subscribe(()=> {
      this._ngZone.run(() => {
        this.state = Object.assign({}, this._appStore.getState());
      });
    });

    // load initial pets
    this._petsApiService.getPets()
      .subscribe((data) => {
        this._appStore.dispatch(this._petActions.loadPets(data));
      },
      (err) => {
        debugger;
      },
      () => {
        console.log('completed');
      });

  }

}
