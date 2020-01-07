
export const GET_TRUCKS = 'GET_TRUCKS';
export const ADD_TRUCK = 'ADD_TRUCK'; 
export const DELETE_TRUCK = 'DELETE_TRUCK';
export const getTrucks = (load) => dispatch => {
    dispatch({type: GET_TRUCKS, payload: load});

};

export const editTrucks = () => dispatch => {


};

export const deleteTrucks = (id) => dispatch => {
    dispatch({type: DELETE_TRUCK, payload: id})

};

export const addTrucks = (load) => dispatch => {
    dispatch({type: ADD_TRUCK, payload: load});

};