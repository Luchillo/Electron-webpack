import { NgModule } from '@angular/core';

import { SharedModule } from "../shared/shared.module";
import {
  TaskComponent,
  LogTaskComponent,
  BaseTaskComponent,
  TaskSelectorComponent,
} from '.';

@NgModule({
  imports: [ SharedModule ],
  exports: [
    TaskSelectorComponent,
  ],
  declarations: [
    TaskComponent,
    LogTaskComponent,
    BaseTaskComponent,
    TaskSelectorComponent,
  ],
  entryComponents: [
    LogTaskComponent,
    BaseTaskComponent,
  ],
  providers: [],
})
export class TaskModule { }
