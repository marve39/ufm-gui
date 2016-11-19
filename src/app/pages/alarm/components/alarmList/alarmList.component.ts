import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'alarm-list',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./alarmList.scss')],
  template: require('./alarmList.html'),
})
export class AlarmList{
  constructor() {}
}