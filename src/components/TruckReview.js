import React from "react";
import Button from "@kiwicom/orbit-components/lib/Button";

const TruckReview = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser, handlechange, handlesubmit] = useFormState(
    {
      id: null,
      name: ``,
      email: ``,
      role: ``
    },
    props
  );

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <fieldset className='formfield'>
          <label className='forms'>
            Name: &nbsp;
            <input
              minLength='3'
              type='text'
              name='name'
              placeholder='Enter Name'
              value={user.name}
              onChange={handlechange}
            />
          </label>

          <label className='forms'>
            Email: &nbsp;
            <input
              placeholder='Enter Email'
              type='text'
              name='email'
              value={user.email}
              onChange={handlechange}
            />
          </label>
          <label className='forms'>
            <Inputtextarea
              placeholder='Enter Role and Job description'
              type='text'
              name='role'
              cols='50'
              rows='10'
              minLength='5'
              value={user.role}
              onChange={handlechange}
            />
          </label>
          <Button
            size='large'
            style={{ margin: `0 auto`, marginBottom: `3%`, marginTop: `.5%` }}
            type='submit'>
            Submit
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

export default TruckReview;
