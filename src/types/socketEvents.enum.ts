export enum SocketEventsEnum {
  // Board related events
  boardsJoin = 'boards:join',
  boardsLeave = 'boards:leave',
  boardsUpdate = 'boards:update',
  boardsUpdateSuccess = 'boards:updateeSuccess',
  boardsUpdateFailure = 'boards:updateFailure',
  boardsDelete = 'boards:delete',
  boardsDeleteSuccess = 'boards:deleteeSuccess',
  boardsDeleteFailure = 'boards:deleteFailure',

  // Column related evnets
  columnsCreate = 'columns:create',
  columnsCreateSuccess = 'columns:createSuccess',
  columnsCreateFailure = 'columns:createFailure',
  columnsUpdate = 'columns:update',
  columnsUpdateSuccess = 'columns:updateeSuccess',
  columnsUpdateFailure = 'columns:updateFailure',
  columnsDelete = 'columns:delete',
  columnsDeleteSuccess = 'columns:deleteeSuccess',
  columnsDeleteFailure = 'columns:deleteFailure',

  // Task related events
  tasksCreate = 'tasks:create',
  tasksCreateSuccess = 'tasks:createSuccess',
  tasksCreateFailure = 'tasks:createFailure',
  tasksUpdate = 'tasks:update',
  tasksUpdateSuccess = 'tasks:updateSuccess',
  tasksUpdateFailure = 'tasks:updateFailure',
  tasksDelete = 'tasks:delete',
  tasksDeleteSuccess = 'tasks:deleteeSuccess',
  tasksDeleteFailure = 'tasks:deleteFailure',
}