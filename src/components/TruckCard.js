import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const TruckCard = props => {
  const { url } = useRouteMatch();
  console.log(props, `props!!`);

  // const { id } = useParams();

  return (
    <div>
      <p>TruckCard</p>
      <p>{props.location.state.value.id}</p>
      <Link
        to={{
          pathname: `${url}/review`,
          state: { value: props.location.state.value }
        }}>
        Write Review
      </Link>
    </div>
  );
};

export default TruckCard;
