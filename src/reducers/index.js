import {combineReducers} from 'redux';

///reducers
import trucksReducer from './trucks'
import userReducer from './users';





const reducers = combineReducers({
    users: userReducer,
    trucks: trucksReducer

});

export default reducers;