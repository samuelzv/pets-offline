import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Http, Response} from 'angular2/http';

const API_PATH = 'http://localhost:3000/';

@Injectable()
export class PetsApi {

  static get parameters() {
    return [[Http]];
  }

  constructor (http) {
    this._http = http;
  }

  getPet() {
    return this._http
      .get(API_PATH + 'pet')
      .map(res => res.json())
      .share();
  }

}
