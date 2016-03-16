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

    debugger;
    // we subscribe to store events
    this._appStore.subscribe(()=> {
      this._ngZone.run(() => {
        this.state = Object.assign({}, this._appStore.getState());
      });
    });

    this.loadPets();

  }

  isOnline() {
    return this.state.networkStatus == 'offline' ? false: true;
  }


  loadPets() {

    if(this.isOnline()) {
      this.loadPetsOnline()
    } else {
      // It's yet in the local store, we can use it
    }

  }

  loadPetsOnline() {
    // load initial pets
    this._petsApiService.getPets()
      .subscribe((data) => {
          data.forEach( pet => {
            pet.isSync = true;
          });
          this._appStore.dispatch(this._petActions.loadPets(data));
        },
        (err) => {
          debugger;
        },
        () => {
          console.log('completed');
        });
  }

  addPet(petname, kind) {

    if(this.isOnline()) {
      this.addPetOnline(petname, kind);
    } else {
      this.addPetOffline(petname, kind);
    }

  }

  addPetOffline(petname, kind) {
    var pet = {
      name: petname,
      kind: kind,
      isSync: false
    };
    debugger;
    this._appStore.dispatch(this._petActions.addPet(pet));
  }

  addPetOnline(petname, kind) {
    var pet = {
      name: petname,
      kind: kind
    };
    this._petsApiService.addPet(pet)
      .subscribe(
        data => {
          console.log('Ok');
          this.loadPets();
        },
        err => {
          console.log('Error adding pet ' + err);
        }),
      () => console.log('Add pet ok');
  }

}
