import { combineReducers } from 'redux';
import todos from './todos';
import counter from './counter';

const counterApp = combineReducers({
    todos,
    counter
})

export default counterApp