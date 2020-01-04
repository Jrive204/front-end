import React, { useState } from "react";
import { useFormState } from "./hooks/useFormState";
import {
  Inputtextarea,
  StyledButton,
  StyledRating,
  StyledReviewDiv,
  StyledTitleInput,
  StyledTruckReviewDiv,
  StyledTruckReviewFormDiv,
  StyledTruckReviewMap
} from "../styles/TruckReviewStyles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const TruckReview = props => {
  // eslint-disable-next-line no-unused-vars
  const [
    user,
    handlechange,
    handlestarchange,
    handlesubmit,
    value
  ] = useFormState(
    {
      id: null,
      title: ``,
      stars: 0,
      review: ``
    },
    props
  );
  const [hover, setHover] = useState(0);

  const labels = {
    0: "Select your Rating",
    1: "Horrible",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent"
  };

  console.log(value, hover);

  return (
    <StyledTruckReviewDiv>
      <StyledTruckReviewFormDiv>
        <h1>&nbsp; Map Truck Title </h1>
        <form onSubmit={handlesubmit}>
          <fieldset style={{ border: `0` }} className='formfield'>
            <label className='forms'>
              <p
                style={{
                  marginBottom: `8px`,
                  fontSize: `1rem`
                }}>
                Title your review
              </p>
              <StyledTitleInput
                type='text'
                name='title'
                minLength='3'
                placeholder='Summarize your visit or highlight an intersting detail'
                value={user.title}
                onChange={handlechange}
              />
            </label>

            <StyledReviewDiv>
              <StyledRating>
                <Rating
                  name='stars'
                  type='radio'
                  size='large'
                  value={value}
                  onChange={handlestarchange}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
              </StyledRating>
              <Inputtextarea
                placeholder='Tell people about your experience'
                type='text'
                name='review'
                cols='50'
                rows='10'
                value={user.review}
                onChange={handlechange}></Inputtextarea>
            </StyledReviewDiv>

            <StyledButton
              className='ReviewButton'
              submit={true}
              size='large'
              type='primary'>
              Submit
            </StyledButton>
          </fieldset>
        </form>
        {console.log(user, `user`)}
      </StyledTruckReviewFormDiv>
      <StyledTruckReviewMap>
        <h2>Map Reviews</h2>
        <p>Random text</p>
      </StyledTruckReviewMap>
    </StyledTruckReviewDiv>
  );
};

export default TruckReview;
