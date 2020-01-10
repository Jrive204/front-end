import React, { useState } from "react";
import { useFormState } from "./hooks/useFormState";
import { connect } from "react-redux";
import { getTrucks } from "../actions";
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
  const truck = props.location.state.value;
  const name = props.location.state.truckname;
  console.log(props, `truck`);

  console.log(value, hover);

  return (
    <StyledTruckReviewDiv>
      <StyledTruckReviewFormDiv>
        <h1>&nbsp; {name.name} </h1>
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
                    ? setTimeout(
                        () =>
                          push({
                            pathname: `/trucks/${props.match.params.id}`,
                            state: { value: props.location.state.value }
                          }),
                        1200
                      )
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
        <h2>Reviews</h2>
        {truck.map(t => (
          <>
            <h3>{t.username}</h3>
            <h4> {t.title}</h4>
            <Rating
              name='half-rating'
              value={t.rating}
              precision={0.5}
              readOnly></Rating>
            <p>
              {t.review}Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </>
        ))}
      </StyledTruckReviewMap>
    </StyledTruckReviewDiv>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    trucks: state.trucks
  };
};

export default connect(mapStateToProps, { getTrucks })(TruckReview);
