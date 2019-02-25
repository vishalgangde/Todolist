import { combineReducers } from 'redux';
import reducersTask from './reducersTask'

export default combineReducers({
    tasks:reducersTask
});