import {Component} from 'angular2/core';
import {PetsApiService} from '../services/petsApiService';

@Component({
  selector: 'demo-main',
  templateUrl: './demo.main.component/templates/demo.main.component.html'
})
export class DemoMainComponent {


  constructor(petsApiService) {
    this._petsApiService = petsApiService;
  }

  static get parameters() {
    return [ [PetsApiService] ];
  }

  addPet(petname, kind) {
    var pet = {
      name: petname,
      kind: kind
    };
    this._petsApiService.addPet(pet)
      .subscribe(
        data => {
          console.log('Ok');
        },
        err => {
          console.log('Error adding pet ' + err);
        }),
        () => console.log('Add pet ok');
  }


}
