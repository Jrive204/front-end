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
  StyledTruckReviewMap,
  StyledFab,
  useStyles
} from "../styles/TruckReviewStyles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { StylesProvider } from "@material-ui/styles";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";
import Publish from "@material-ui/icons/Publish";
import { useHistory } from "react-router-dom";

const TruckReview = props => {
  const classes = useStyles();
  const [hover, setHover] = useState(0);
  const { push } = useHistory();
  const [
    user,
    handlechange,
    // eslint-disable-next-line no-unused-vars
    handlesubmit,
    handleButtonClick,
    handlestarchange,
    success,
    loading,
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

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });

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
        <h1>&nbsp; Map Truck Title {console.log(props, `propsagain`)}</h1>

        <form id='ReviewForm' onSubmit={handleButtonClick}>
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
            <div className={classes.wrapper}>
              <StylesProvider injectFirst>
                <StyledButton
                  variant='contained'
                  color='default'
                  type='submit'
                  size='large'
                  className={buttonClassname}
                  disabled={loading}>
                  Post Review
                  {loading && (
                    <CircularProgress
                      size={32}
                      className={classes.buttonProgress}
                    />
                  )}
                </StyledButton>
              </StylesProvider>
              &nbsp;&nbsp;
              <StylesProvider injectFirst>
                <StyledFab
                  aria-label='save'
                  type='submit'
                  color='primary'
                  className={buttonClassname}>
                  {success ? <CheckIcon /> : <Publish />}
                  {/* Will Pushing Back to Truck Wall */}
                  {success
                    ? setTimeout(() => {
                        push(`/trucks/${props.match.params}`);
                      }, 1500)
                    : null}
                </StyledFab>
                {loading && (
                  <CircularProgress size={68} className={classes.fabProgress} />
                )}
              </StylesProvider>
            </div>
          </fieldset>
        </form>
        {console.log(user, `user`)}
      </StyledTruckReviewFormDiv>
      <StyledTruckReviewMap>
        <h2>Map other Reviews here</h2>
        <h3>Reviewer's name</h3>
        <h4>Review Title</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in
          sodales nibh. Duis sodales mattis malesuada. Morbi lorem urna,
          hendrerit fringilla urna quis, ornare fermentum eros. Nam feugiat dui
          orci, non fringilla odio consequat quis. Morbi tempor consequat arcu,
          nec commodo est luctus vel. Suspendisse potenti. Proin tincidunt ac
          mauris id placerat. Nulla egestas tempor nunc in tristique. Donec ut
          viverra mi, sit amet aliquam dolor. Aliquam eget leo auctor, laoreet
          sem vel, eleifend justo. In vehicula leo diam, ut vestibulum est.
        </p>
      </StyledTruckReviewMap>
    </StyledTruckReviewDiv>
  );
};

export default TruckReview;
