import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

//inline style lines : 42, 57, 80, 85, 88, 95

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "3%"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 700,
    height: "35vh",
    display: "flex",
    width: "800",
    alignItems: "center"
  },

  stars: {
    fontSize: "2rem"
  },
  grid: {
    fontSize: ".9rem",
    display: "flex",
    flexWrap: "wrap"
  },
  image: {
    width: 285,
    height: 285
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export const StyledFav = withStyles({
  iconFilled: {
    color: "#ff6d75"
  },
  iconHover: {
    color: "#ff3d47"
  }
})(Rating);

export const StyledRatings = styled.div`
  width: 200;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
