import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { AlarmComponent } from './alarm.component';
import { routing } from './alarm.routing';

import { AlarmList } from './components/alarmList/alarmList.component';
import { ContextualTable } from './components/alarmList/components/contextualTable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    AlarmComponent,
    AlarmList,
    ContextualTable
  ]
})
export default class AlarmModule {}