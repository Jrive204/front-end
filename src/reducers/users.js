import {GET_USER_DATA,ADD_TRUCK,DELETE_TRUCK,EDIT_TRUCK} from '../actions';


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
        case EDIT_TRUCK:
            return {
                ...state,
                trucks: [...state.trucks.map(item => {
                    console.log(item.id);
                    if (item.id == action.payload.key) {
                        return{...item,
                            
                            name: action.payload.data.name,
                            imageUrl: action.payload.data.imageUrl,
                            cuisine: action.payload.data.cuisine,
                            description: action.payload.data.description,
                            menu: action.payload.data.menu
                        }
                    }else {
                        return item;
                    }
                })]
            }
        default:
            return state;
    }

}
export default userReducer;