import { combineReducers } from 'redux';

import TodoListRed from '../pages/PagePersistTodo/reducer';

const rootReducer = combineReducers({
  TodoListRed,
});

export default rootReducer;