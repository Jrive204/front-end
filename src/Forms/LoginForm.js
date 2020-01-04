import React from "react";
import { useForm} from "react-hook-form";
import "./Forms.css";
import {axiosWithAuth}  from "../util/axiosWithAuth"
import { Link } from 'react-router-dom'

// import axios from 'axios';




export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = data => {
   console.log(data)
   axiosWithAuth()
   .post("https://reqres.in/api/users/", data)
  //  https://lambda-food-truck.herokuapp.com/api/auth/login 
   .then(res => {
     console.log("success", res);
    
   })
   .catch(err =>
     console.log(err.response)
   );
  };                                       

  return (

    <div className="base-container">
          <div className="header">Login</div>
         
          
    
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form">
    <div className="form-group">

       {/* Start of UserName field */}
      <label htmlFor="username">
       User Name
        <input type="text" 
        name="userName" 
        placeholder="username"
        ref={register({ required: true, minLength: 6, maxLength: 15 })}  />
      </label>
      {errors.userName && errors.userName.type === "required" && (
          <span>Please enter a username</span>
        )}
      {errors.userName&& errors.userName.type === "minLength" && (
          <span>Username is too short</span>
        )}
         {errors.userName && errors.userName.type === "maxLength" && (
          <span>Username is too long</span>
        )}

        {/* End of UserName Field */}
      
        {/* Start of Password Field */}
        <label htmlFor="password">
        <span> No Account? <Link tag={Link} to="/signup">Sign Up</Link> </span>
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
        {/* End of password field  */}

      </div>
      
      <div className="footer">
      {/* <button type="button" className="btn" >Submit */}
      <button className="btn">Submit</button> 
     </div>
     </div>

    </form>
    </div>
  );
}