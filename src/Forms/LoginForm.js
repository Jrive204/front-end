import React from "react";
import { useForm} from "react-hook-form";
import "./Forms.css";
import {axiosWithAuth}  from "../util/axiosWithAuth"
import { Link } from 'react-router-dom'
import { Login, Container, Button} from "../styles/LoginRegisterStyles"


export default function LoginForm(props) {
  const { register, handleSubmit, errors } = useForm();

 

  const onSubmit = data => {
   console.log(data)
   axiosWithAuth()
   .post("https://lambda-food-truck.herokuapp.com/api/auth/login", data) 
  
  .then(res => {
     console.log("success", res);
     localStorage.setItem('token', res.data.token);
     props.history.push('/trucks');
   })
   .catch(err =>
     console.log(err.response)
   );
  };                                       

  return (

    <Container>
          <Login>Login
          </Login>
      <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form">
    <div className="form-group">

       {/* Start of UserName field */}
      <label htmlFor="username">
       User Name
        <input type="text" 
        name="username" 
        placeholder="username"
        ref={register({ required: true, minLength: 6, maxLength: 15 })}  />
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

        {/* <label htmlFor="role">
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
        </label> */}
        
      </div>
      
      <div className="footer">
     
      <Button>Submit</Button> 
     </div>
     </div>

    </form>
    </Container>
  );
}

