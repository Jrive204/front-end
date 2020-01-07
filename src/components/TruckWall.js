import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../util/axiosWithAuth';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { useStyles, StyledFav, StyledRatings } from "../styles/TruckWallStyles";
import Rating from "@material-ui/lab/Rating";

import data from "../data.test";

const TruckWall = () => {
  const classes = useStyles();
  const [trucks] = useState(data);
  const [favorite, setFavorite] = useState([]);

  const MAX_LENGTH = 250;

  console.log(trucks.length);

  useEffect(() => {
    axiosWithAuth()
    .get('https://lambda-food-truck.herokuapp.com/api/trucks')
    .then(resp => {
      console.log(resp);
    })
    .catch(err => console.log(err));



  },[]);


  return (
    <>
      {trucks.map((truck, index) => (
        <div key={truck.id} className={classes.root}>
          <Paper elevation={10} className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <Link to='/trucks/card'>
                    <img
                      className={classes.img}
                      alt='Truck'
                      src={truck.imageUrl}
                    />
                  </Link>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container className={classes.grid}>
                <Grid item xs container direction='column' spacing={2}>
                  <Grid item xs>
                    <Link style={{ textDecoration: "none" }} to='/trucks/card'>
                      <Typography
                        style={{
                          fontSize: "1.6rem",
                          color: "blue",
                          fontWeight: "bold"
                        }}
                        align='left'
                        gutterBottom
                        variant='h5'>
                        {truck.name}
                      </Typography>
                    </Link>
                    <StyledRatings>
                      <Rating
                        className={classes.stars}
                        name='half-rating'
                        // trucks.length will = reviews.length
                        value={truck.stars / trucks.length}
                        precision={0.5}
                        readOnly>
                        {console.log(trucks.length, "reviews")}
                      </Rating>
                      <span style={{ marginLeft: "2%" }}>
                        {trucks.length} reviews
                      </span>
                    </StyledRatings>
                    <span style={{ fontSize: "1rem" }}>
                      Cuisine: {truck.cuisine}
                    </span>
                    <Typography
                      align='left'
                      component='div'
                      className={classes.grid}
                      paragraph>
                      {truck.description.length > MAX_LENGTH ? (
                        <p>
                          {`${truck.description.substring(0, MAX_LENGTH)}...`}
                          <Link to='/trucks/card'>Read more</Link>
                        </p>
                      ) : (
                        <>{truck.description}</>
                      )}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <StyledFav
                      name='Favorite'
                      value={0}
                      onChange={event => {
                        console.log("Hello once");
                      }}
                      max={1}
                      icon={<FavoriteIcon fontSize='inherit' />}
                    />

                    <Typography
                      align='right'
                      variant='body2'
                      style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid style={{ width: "25%" }}>
                  <Typography align='right' component='div' paragraph>
                    <span
                      style={{
                        marginLeft: `10px`,
                        fontSize: ".8rem"
                      }}>
                      {truck.phonenumber}
                    </span>
                    <p
                      style={{
                        marginLeft: `10px`,
                        fontSize: ".8rem"
                      }}>
                      {truck.currentLocation}
                    </p>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ))}
    </>
  );
};

export default TruckWall;
