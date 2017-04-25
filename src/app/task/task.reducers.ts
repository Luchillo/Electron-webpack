import { ActionReducer } from '@ngrx/store';

import { tasksTypes } from ".";

const LogTaskType: TaskType = tasksTypes.find((taskType) => taskType.type == 'LogTaskComponent');

const taskDefaults: Task = {
  id: '',
  name: '',
  order: 0,
  active: true,
  taskScheduleId: '',

  method: 'NEW',
  type: LogTaskType,
};

const initialTaskState: Task[] = [
  {
    id: '0',
    name: 'Task 1',
    order: 1,
    active: true,
    taskScheduleId: '2783fc70-2395-11e7-b013-756e75906f8b',

    type: LogTaskType,
  },
];

export const currentTaskReducer: ActionReducer<Task> = (state = initialTaskState[0], action) => {
  switch (action.type) {
    case 'RESET_CURRENT_TASK':
      return taskDefaults;

    case 'CREATE_CURRENT_TASK':
      return Object.assign({}, taskDefaults, action.payload);

    case 'UPDATE_CURRENT_TASK':
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}

export const tasksReducer: ActionReducer<Task[]> = (state = initialTaskState, action) => {
  let selectedScheduleList: Task;

  switch (action.type) {
    case 'ADD_TASK':
      return ([
          ...state,
          Object.assign({}, taskDefaults, action.payload),
      ] as Task[]).sort((a, b) => b.order - a.order);

    case 'UPDATE_TASK':
      selectedScheduleList = action.payload
      return ([
          ...state.filter((scheduleList) => scheduleList.id !== selectedScheduleList.id),
          selectedScheduleList,
      ] as Task[]).sort((a, b) => b.order - a.order);

    case 'DELETE_TASK':
      selectedScheduleList = action.payload
      return [
          ...state.filter((scheduleList) => scheduleList.id !== selectedScheduleList.id),
      ];

    default:
      return state;
  }
}
