import React from 'react';
import { useForm } from 'react-hook-form';
import {connect} from 'react-redux';
import {addTrucks} from '../actions';
import {axiosWithAuth} from '../util/axiosWithAuth';

const AddTruck = (props) => {
    const {handleSubmit, register, errors} = useForm();
    const onSubmit = values => {
        axiosWithAuth()
        .post('https://lambda-food-truck.herokuapp.com/api/trucks', values)
        .then(resp => {
            console.log(resp);
            let temp = resp.data.filter(item => item.name === values.name );
            props.addTrucks(temp[0]);
            props.history.push('/home');
            
        })
        .catch(err => console.log(err));
        console.log(values);
    }
    return(<>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name: 
                <input name="name" ref={register} /></label>
            <label>Image: 
                <input name="imageUrl" ref={register}/></label>
            <label>Cuisine: 
                <input name="cuisine" ref={register}/></label>
            <button>Add</button>
            </form>
        </div>
    </>)

};
const mapStateToProps = state => {
    return{};
};

export default connect(
    mapStateToProps,
    {addTrucks}
    )(AddTruck);