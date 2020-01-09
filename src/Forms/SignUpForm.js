import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../util/axiosWithAuth";

import { Link } from "react-router-dom";
import { Login, Container, Button, Body } from "../styles/LoginRegisterStyles";

import "./Forms.css";



export default function SignUpForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    axiosWithAuth()
      .post("https://lambda-food-truck.herokuapp.com/api/auth/register", data)

      .then(res => {
        console.log("success", res);

        localStorage.setItem("token", res.data.token);
        props.history.push("/home");
      })
      .catch(err => 
        alert(err.response.data.username));
  

  };

  return (
    <div className='base-container'>

      {/* <img src ={loginImg} alt="construction"/> */}


      <Container>
        <Login>Sign Up</Login>
          <Body>
            Enter a username and password to create your account. Your privacy is important to us and will not be shared.
          </Body>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form'>
            <div className='form-group'>
              {/* Start of UserName field */}
              <div className='rectangle'>
                <label htmlFor='username'>
                  User Name
                  <input
                    type='text'
                    placeholder='username'
                    name='username'
                    ref={register({
                      required: true,
                      minLength: 6,
                      maxLength: 15
                    })}
                  />
                </label>

                {errors.username && errors.username.type === "required" && (
                  <span>Please enter a username</span>
                )}
                {errors.username && errors.username.type === "minLength" && (
                  <span>Username is too short</span>
                )}
                {errors.username && errors.username.type === "maxLength" && (
                  <span>Username is too long</span>
                )}
              
                
              </div>
              {/* End of UserName Field */}

           

              <label htmlFor='password'>
                Password{" "}
                <span>
                  Already a user?
                  <Link tag={Link} to='/'>
                    Sign In
                  </Link>
                </span>
              </label>
              <input
                type='password'
                placeholder='Password'
                name='password'
                ref={register({ required: true, minLength: 5 })}
              />

              {errors.password && errors.password.type === "required" && (
                <span>Password is required</span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span>Password is too short - 5 characters</span>
              )}

              <label htmlFor='role'>
                Select your role
                <select
                  name='role'
                  className='select'
                  ref={register({ required: true })}>
                  {errors.role && errors.role.type === "required" && (
                    <span>Role is required</span>
                  )}
                  <option value='2'>Diner</option>
                  <option value='1'>Operator</option>
                </select>
              </label>
            </div>

            <div className='footer'>
              <Button>Submit</Button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}
