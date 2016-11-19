import { Routes, RouterModule } from '@angular/router';
import { AlarmComponent } from './alarm.component';
import { AlarmList } from './components/alarmList/alarmList.component';

const routes: Routes = [
  {
    path: '',
    component: AlarmComponent,
    children: [
      { path: 'alarmlist', component: AlarmList }
    ]
  }
];

export const routing = RouterModule.forChild(routes);