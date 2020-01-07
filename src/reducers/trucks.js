import {GET_TRUCKS} from '../actions';

const initialState = {
    trucks:[]

}

const trucksReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TRUCKS:
            return { 
                trucks: [...state.trucks, action.payload] 
            };
        default:
            return state;
    }

}
export default trucksReducer;