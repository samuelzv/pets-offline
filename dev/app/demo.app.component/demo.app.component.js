import {Component} from 'angular2/core';
import {DemoSurveyComponent} from '../demo.survey.component/demo.survey.component';
import {DemoHeaderComponent} from '../demo.header.component/demo.header.component';

@Component({
  directives:[DemoSurveyComponent, DemoHeaderComponent],
  selector: 'demo-app',
  template: `
    <demo-header></demo-header>
    <demo-main></demo-main>
  `
})

export class DemoAppComponent {

}
