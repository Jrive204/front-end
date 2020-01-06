import React from "react";
import { Link } from "react-router-dom";

const TruckCard = () => {
  return (
    <div>
      <p>TruckCard</p>
      <Link to='/trucks/card/review'> Write Review </Link>
    </div>
  );
};

export default TruckCard;
