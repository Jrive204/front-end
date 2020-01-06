import {combineReducers} from 'redux';

///reducers
import userReducer from './users';





const reducers = combineReducers({
    users: userReducer

});

export default reducers;