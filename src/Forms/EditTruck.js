import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {editTrucks} from '../actions';


const EditTruck = (props) => {
    const [editing, setEditing] = useState(false);
    const [menuItems, setMenuItems] = useState([...props.location.state.truck.menu]);
    const {handleSubmit, register, errors} = useForm();
    console.log(props);
    
    
    const updateMenu = (e) => {
       const key = e.currentTarget.getAttribute('data-key');
       
       setMenuItems([
            ...menuItems.map((item,index) => {
                if(index == key){
                   return { ...item, [e.target.name]: e.target.value }
                }else{
                    return item;
                }
            })

       ]);
       
       
    //    console.log(menuItems);
    };
    
    
    const onSubmit = values => {
        let data = {
            name: values.name ? values.name : props.location.state.truck.name,
            imageUrl: values.imageUrl ? values.imageUrl : props.location.state.truck.imageUrl,
            cuisine: values.cuisine ? values.cuisine : props.location.state.truck.cuisine,
            description: values.description ? values.description : props.location.state.truck.description,
            menu: menuItems ? menuItems : props.location.state.truck.menu
        }
        props.editTrucks(data, props.match.params.id);
        props.history.push('/home');
    };
    return(<>
        <div className="editTruck">
            <h2>Editing Truck (TruckName)</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name: 
                    <input name="name" placeholder={props.location.state.truck.name} ref={register} /></label>
                <label>Image: 
                    <input name="imageUrl" placeholder={props.location.state.truck.imageUrl} ref={register} /></label>
                <label>Name: 
                    <input name="cuisine"  placeholder={props.location.state.truck.cuisine} ref={register} /></label>
                <label>Description: 
                    <textarea name="description" ref={register}/></label>
                
                {!editing && <button onClick={()=> setEditing(true)} > Edit Menu </button>}
                {editing &&
                    <div>
                     {menuItems && menuItems.map((item,index) => 
                        <div key={index}>
                        <label >Menu Item:
                            <input name='name' data-key={index} placeholder={item.name} onChange={updateMenu}/></label>
                        <label >Price:
                            <input name='price' data-key={index} placeholder={item.price} onChange={updateMenu} /></label>
                        </div>
                     )}
                     <div className='addMenuItem' onClick={ () => {
                            setMenuItems([...menuItems, { name:'',price:''}])
                     }}><h4>+ Add Item</h4></div>
                    </div>
                    
                
                }
                { console.log(menuItems) }
                
                <button>Edit</button>
            </form>

        </div>
    
    </>);
};
const mapStateToProps = state => {
    return{};
}
export default connect(
    mapStateToProps,
    {editTrucks}
    )(EditTruck);