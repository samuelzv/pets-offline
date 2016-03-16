import {bootstrap} from 'angular2/platform/browser';
import {DemoAppComponent} from './demo.app.component/demo.app.component';
import {PetsApi} from './services/petsApi';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(DemoAppComponent,[PetsApi,HTTP_PROVIDERS]);
