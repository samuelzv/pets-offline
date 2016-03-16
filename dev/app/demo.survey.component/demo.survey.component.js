import {Component} from 'angular2/core';

@Component({
  selector: 'demo-main',
  styleUrls: ['./demo.survey.component/less/demo.survey.component.css'],
  templateUrl: './demo.survey.component/templates/demo.survey.component.html'
})
export class DemoSurveyComponent {

  constructor() {
    this.name = 'Maximilian';
  }


}
