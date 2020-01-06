import React from "react";
import {useForm} from "react-hook-form";
import {axiosWithAuth}  from "../util/axiosWithAuth"
import { Link } from 'react-router-dom'

import "./Forms.css";

// import loginImg from "../../login.jpg";



export default function SignUpForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    // console.log(data);
    axiosWithAuth()
   .post("https://reqres.in/api/users/", data)
  
  //  https://lambda-food-truck.herokuapp.com/api/auth/register
  // "https://reqres.in/api/users/"

   .then(res => {
     console.log("success", res);
    //  alert("Sign up successful")
    
   })
   .catch(err =>
     console.log(err.response)
   );
  

  };

  return (

    <div className="base-container">
          <div className="header">Sign Up</div>
          {/* <img src ={loginImg} alt="construction"/> */}
          
    
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form">
    <div className="form-group">
         
            {/* Start of UserName field */}
      <div className="rectangle">
      <label htmlFor="username">
       User Name
        <input type="text" 
        placeholder="username"
        name="username" 
        ref={register({ required: true, minLength: 6, maxLength: 15 })} />
      </label>
   
      {errors.username && errors.username.type === "required" && (
          <span>Please enter a username</span>
        )}
        {errors.username&& errors.username.type === "minLength" && (
          <span>Username is too short</span>
        )}
         {errors.username && errors.username.type === "maxLength" && (
          <span>Username is too long</span>
        )}
</div>
        {/* End of UserName Field */}

        {/* Start of Full Name Field */}
      <label htmlFor="FullName"> Name
        <span> Already a user? 
          <Link tag={Link} to="/login">Sign In</Link> 
        </span>
            <input
                type='text'
                placeholder='Name'
                name='FullName'
                ref={register({ required: true, minLength: 3})}
            />
      
        {errors.FullName && errors.FullName.type === "required" && (
          <span>Please enter your name</span>
        )}
        {errors.FullName && errors.FullName.type === "minLength" && (
          <span>Name is too short</span>
        )}
      </label>
                  {/* End of Full Name Field*/}

      <label htmlFor="password">
        Password
        </label>
        <input type="password" 
        placeholder="Password"
        name="password" 
        ref={register({required: true, minLength: 5})} />
     
   
      {errors.password && errors.password.type === "required" && (
          <span>Password is required</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span>Password is too short - 5 characters</span>
        )}

        
        <label htmlFor="role">
            Select your role
          <select name="role"
          className="select"
         ref={register({required: true})}
         >
          {errors.role && errors.role.type === "required" && (
          <span>Role is required</span>
        )}  
          <option value="1">Diner</option>
          <option value="2">Operator</option>
          </select>
        </label>
        

      </div> 
      
      <div className="footer">

      <button className="btn">Submit</button> 
     </div>
     </div>

    </form>
    </div>
  );
}
