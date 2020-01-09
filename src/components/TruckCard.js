import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  StyledTruckCardDiv,
  StyledTruckCardimgdiv,
  StyledTruckCardimg,
  StyledTruckCardTitleDiv,
  StyledTruckCardReviewdiv,
  useStyles
} from "../styles/TruckCardStyles";
import Rating from "@material-ui/lab/Rating";
import EditIcon from "@material-ui/icons/Edit";
import data from "../data.test";

import { Button, GridList, GridListTile } from "@material-ui/core";
import { axiosWithAuth } from "../util/axiosWithAuth";

const TruckCard = props => {
  const { url } = useRouteMatch();
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  const [truckData, settruckData] = useState([]);

  const [currentpage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  console.log(props, `props!!`);
  console.log(data, "data");

  console.log(props.location.pathname, "hi");

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://lambda-food-truck.herokuapp.com/api${props.location.pathname}`
      )
      .then(response => {
        console.log(response.data, `response`);
        settruckData(response.data);
        setReviews(response.data.reviews);
      });
  }, [props.location.pathname]);

  console.log(reviews, "thereviews");

  //Pagination
  const indexofLastPost = currentpage * postsPerPage;
  const indexOfFirstPost = indexofLastPost - postsPerPage;
  const currentPosts = reviews.slice(indexOfFirstPost, indexofLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(reviews.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const truck = props.location.state.value;
  console.log(truckData.reviews, "yes");

  return (
    <StyledTruckCardDiv>
      <StyledTruckCardimgdiv style={{ width: `100%` }}>
        <StyledTruckCardimg
          src={truckData.imageUrl}
          // {truck.imageUrl}
          alt='truck'
        />
      </StyledTruckCardimgdiv>
      <StyledTruckCardTitleDiv>
        <h1>{truckData.name} Truck Title</h1>
        <div style={{ display: "flex", width: "100%", marginBottom: ".5%" }}>
          <Rating
            name='half-rating'
            // trucks.length will = reviews.length
            value={truckData.avgRating}
            precision={0.5}
            readOnly></Rating>
          <span style={{ marginLeft: "2%" }}>{reviews.length} reviews</span>
        </div>
        Cuisine: {truckData.cuisine}
      </StyledTruckCardTitleDiv>
      <div style={{ borderBottom: ".5px dashed gray", marginBottom: "3%" }}>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `${url}/review`,
            state: { value: reviews, truckname: truck }
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
      <div>
        <h2>Reviews</h2>
        {currentPosts.map(review => (
          <StyledTruckCardReviewdiv key={review.id}>
            <h3>{review.title}</h3>
            <Rating
              name='half-rating'
              value={review.rating}
              precision={0.5}
              readOnly></Rating>
            <h4>{review.username}</h4>
            <p>{review.review}</p>
          </StyledTruckCardReviewdiv>
        ))}
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "0"
            }}
            className='pagination'>
            {pageNumbers.map(number => (
              <li style={{ display: "flex" }} key={number}>
                <button onClick={() => paginate(number)}>{number}</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </StyledTruckCardDiv>
  );
};

export default TruckCard;
