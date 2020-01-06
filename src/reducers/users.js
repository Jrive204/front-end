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
        default:
            return state;
    }

}
export default userReducer;