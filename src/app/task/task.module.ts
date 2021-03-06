import { NgModule, ModuleWithProviders } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
  TaskComponent,
  TaskSelectorComponent,

  LogTaskExecutor,
  ApiTaskExecutor,
  JsonTaskExecutor,
  JsonXmlTaskExecutor,
  ScheduleDataTaskExecutor,

  LogTaskComponent,
  ApiTaskComponent,
  JsonTaskComponent,
  JsonXmlTaskComponent,
  ScheduleDataTaskComponent,
} from '.';

@NgModule({
  imports: [ SharedModule ],
  exports: [
    TaskSelectorComponent,
  ],
  declarations: [
    TaskComponent,
    LogTaskComponent,
    ApiTaskComponent,
    JsonTaskComponent,
    JsonXmlTaskComponent,
    TaskSelectorComponent,
    ScheduleDataTaskComponent,
  ],
  entryComponents: [
    LogTaskComponent,
    ApiTaskComponent,
    JsonTaskComponent,
    JsonXmlTaskComponent,
    ScheduleDataTaskComponent,
  ],
  providers: [],
})
export class TaskModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TaskModule,
      providers: [
        LogTaskExecutor,
        ApiTaskExecutor,
        JsonTaskExecutor,
        JsonXmlTaskExecutor,
        ScheduleDataTaskExecutor,
      ],
    };
  }
}
