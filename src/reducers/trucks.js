import {GET_TRUCKS} from '../actions';

const initialState = []
    



const trucksReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TRUCKS:
            console.log('reducer',action.payload);
            return [
                ...action.payload
            ];
        default:
            return state;
    }

}
export default trucksReducer;