import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  StyledTruckCardDiv,
  StyledTruckCardimgdiv,
  StyledTruckCardimg,
  StyledTruckCardTitleDiv,
  useStyles
} from "../styles/TruckCardStyles";
import Rating from "@material-ui/lab/Rating";
import EditIcon from "@material-ui/icons/Edit";
import data from "../data.test";

import { Button, GridList, GridListTile } from "@material-ui/core";

const TruckCard = props => {
  const { url } = useRouteMatch();
  console.log(props, `props!!`);
  console.log(data, "data");
  const classes = useStyles();

  const truck = props.location.state.value;

  // const { id } = useParams();

  return (
    <StyledTruckCardDiv>
      <StyledTruckCardimgdiv style={{ width: `100%` }}>
        <StyledTruckCardimg
          src='https://cdn.shopify.com/s/files/1/1682/8513/files/PFF-Food-Trucks-Opening-byAllisonMichelle_69of303_2048x.JPG?v=1546732129'
          // {truck.imageUrl}
          alt='truck'
        />
      </StyledTruckCardimgdiv>
      <StyledTruckCardTitleDiv>
        <h1>{truck.name} Truck Title</h1>
        <div style={{ display: "flex", width: "100%", marginBottom: ".5%" }}>
          <Rating
            name='half-rating'
            // trucks.length will = reviews.length
            value={truck.avgRating}
            precision={0.5}
            readOnly>
            {console.log(truck, "truck")}
          </Rating>
          <span style={{ marginLeft: "2%" }}>{truck.length} reviews</span>
        </div>
        Cuisine: {truck.cuisine}
      </StyledTruckCardTitleDiv>
      <div style={{ borderBottom: ".5px dashed gray", marginBottom: "3%" }}>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `${url}/review`,
            state: { value: props.location.state.value }
          }}>
          <Button
            variant='contained'
            color='secondary'
            startIcon={<EditIcon />}>
            Write Review
          </Button>
        </Link>
        <p style={{ marginBottom: "4%" }}></p>
      </div>
      <h3 style={{ display: "block", width: "100%" }}>Popular Dishes</h3>
      <div className={classes.root}>
        <GridList cellHeight={205} className={classes.gridList} cols={4}>
          {data.map(tile => (
            <GridListTile key={tile.id} cols={tile.cols || 1}>
              <img src={tile.imageUrl} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div>
        <h2>About our truck</h2>
        <p>
          {truck.description}Simple mom-&-pop-style Chinese eatery serving
          basics from fried rice to egg rolls.
        </p>
      </div>
    </StyledTruckCardDiv>
  );
};

export default TruckCard;
