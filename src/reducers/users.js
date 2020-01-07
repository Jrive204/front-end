import {GET_USER_DATA,ADD_TRUCK,DELETE_TRUCK} from '../actions';


const initialState = {
    id: '',
    username: '',
    password: '',
    email: '',
    role: 0,
    latitude: null,
    longitude: null,
    trucks: []

}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_DATA:
            console.log('reducer',action.payload);
            return{ 
                ...action.payload

            };
        case ADD_TRUCK:
            return {
                ...state,
                trucks: [...state.trucks, action.payload]
            }
        case DELETE_TRUCK:
            return {
                ...state,
                trucks: [...state.trucks.filter(item => item.id != action.payload)]
            }
        default:
            return state;
    }

}
export default userReducer;