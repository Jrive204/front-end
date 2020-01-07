import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {axiosWithAuth} from '../util/axiosWithAuth';
import {getUsers,deleteTrucks} from '../actions';
import {Link} from 'react-router-dom';

const OperatorHome = (props) => {


    useEffect(() => {

        axiosWithAuth()
        .get('https://lambda-food-truck.herokuapp.com/api/users/user')
        .then(resp => {
            console.log(resp);
            
            props.getUsers(resp.data);
            
        })
        .catch(err => console.log(err));

    },[])

    const deleteTruck = (e,id) => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`https://lambda-food-truck.herokuapp.com/api/trucks/${id}`)
        .then(resp => {
            console.log(resp);
            props.deleteTrucks(id);
        })
        .catch(err => console.log(err));
    };
    return(<>
        {props.users.role === 1 &&
            <div className="operator">
                <p>Hello {props.users.username}</p>
                <Link to={'/addtruck'}>Create New Truck</Link>
                <div>
                    <h2>Your Trucks</h2>
                    {props.users.trucks.map(truck =>
                        <div key={truck.id}>
                        <h3>{truck.name}</h3>
                        <p>Cuisine: {truck.cuisine}</p>
                        <br />
                        <button onClick={(e) => deleteTruck(e, truck.id)}>delete</button>
                        </div>
                    )}
                </div>

            </div>        
        }
        {props.users.role === 2 && 
            <div className="Diner">
                <p>Hello Diner</p>
            </div>
        
        }
        
    
    
        </>);

};

const mapStateToProps = (state) => {

    return{
        users:state.users,
        trucks:state.trucks
    }
};

export default connect(
    mapStateToProps,
    {getUsers,deleteTrucks}
    )(OperatorHome);