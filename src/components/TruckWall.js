import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { useStyles, StyledFav, StyledRatings } from "../styles/TruckWallStyles";
import Rating from "@material-ui/lab/Rating";
import { axiosWithAuth } from "../util/axiosWithAuth";

import data from "../data.test";
import SearchBar from "./SearchBar";

const TruckWall = () => {
  const classes = useStyles();
  const [trucklist, setTruckList] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [searchName, setSearchName] = useState(``);
  const [searchfilter, setSearchFilter] = useState([]);

  const MAX_LENGTH = 250;

  useEffect(() => {
    window.ymaps.ready(function() {
      const myMap = new window.ymaps.Map(
        "map",
        {
          center: [28.165225, -81.473601],
          zoom: 10
        },
        {
          searchControlProvider: "yandex#search"
        }
      );

      const myGeoObject = new window.ymaps.GeoObject(
        {
          geometry: {
            type: "Point",
            coordinates: [28.165225, -81.473601]
          },

          properties: {
            hintContent: "testing",
            balloonContent: "HELLO"
          }
        },

        {
          iconLayout: "default#imageWithContent",
          iconImageHref:
            "https://image.flaticon.com/icons/svg/1365/1365579.svg",
          iconImageSize: [35, 42],
          iconImageOffset: [-3, -42],
          iconContentOffset: [-3, -42]
        }
      );

      myMap.geoObjects.add(myGeoObject);

      var myPlacemark = new window.ymaps.Placemark(
        [29.165225, -81.473601],
        {},

        {
          iconLayout: "default#image",
          iconImageHref:
            "https://image.flaticon.com/icons/svg/1365/1365579.svg",
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42]
        }
      );
      myMap.geoObjects.add(myPlacemark);
    });
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get(`https://lambda-food-truck.herokuapp.com/api/trucks `)
      .then(response => {
        let trucks = response.data.filter(truck =>
          truck.cuisine.toLowerCase().includes(searchName.toLowerCase().trim())
        );

        //when we have data will change cuisine to name so we can filter by name also
        let namefilter = response.data.filter(truck =>
          truck.cuisine.toLowerCase().includes(searchName.toLowerCase().trim())
        );
        console.log(response.data, `YOOO`);
        setSearchFilter(namefilter);
        setTruckList(trucks);
      });
  }, [searchName]);

  return (
    <>
      <div
        id='map'
        style={{
          margin: "0 auto",
          marginTop: "4%",
          width: "450px",
          height: "250px"
        }}></div>
      <SearchBar setSearchName={setSearchName}></SearchBar>
      {trucklist.map((truck, index) => (
        <div key={truck.id} className={classes.root}>
          <Paper elevation={10} className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Link
                  to={{
                    pathname: `/trucks/${truck.id}`,
                    state: { value: truck }
                  }}>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt='Truck'
                      src={truck.imageUrl}
                    />
                  </ButtonBase>
                </Link>
              </Grid>
              <Grid item xs={12} sm container className={classes.grid}>
                <Grid item xs container direction='column' spacing={2}>
                  <Grid item xs>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: `/trucks/${truck.id}`,
                        state: { value: truck }
                      }}>
                      <Typography
                        style={{
                          fontSize: "1.6rem",
                          color: "blue",
                          fontWeight: "bold"
                        }}
                        align='left'
                        gutterBottom
                        variant='h5'>
                        {truck.name}Title
                      </Typography>
                    </Link>
                    <StyledRatings>
                      <Rating
                        className={classes.stars}
                        name='half-rating'
                        // trucks.length will = reviews.length
                        value={truck.avgRating}
                        precision={0.5}
                        readOnly>
                        {console.log(trucklist.length, "reviews")}
                      </Rating>
                      <span style={{ marginLeft: "2%" }}>
                        {trucklist.length} reviews
                      </span>
                    </StyledRatings>
                    <span style={{ fontSize: "1.2rem" }}>
                      Cuisine: {truck.cuisine}
                    </span>
                    <Typography
                      align='left'
                      component='div'
                      className={classes.grid}
                      paragraph>
                      {!truck.description === null &&
                      truck.description.length > MAX_LENGTH ? (
                        <p>
                          {`${truck.description.substring(0, MAX_LENGTH)}...`}
                          <Link
                            to={{
                              pathname: `/trucks/${truck.id}`,
                              state: { value: truck }
                            }}>
                            Read more
                          </Link>
                        </p>
                      ) : (
                        <>{truck.description} description</>
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
