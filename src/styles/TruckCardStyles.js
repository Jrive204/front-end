import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {}
}));

export const StyledTruckCardDiv = styled.div`
  margin: 0 auto;
  margin-top: 2%;
  max-width: 800px;
`;

export const StyledTruckCardimgdiv = styled.div`
  width: 100%;
  margin-bottom: 1%;
`;

export const StyledTruckCardimg = styled.img`
  width: 100%;
`;

export const StyledTruckCardTitleDiv = styled.div`
  h1 {
    margin-bottom: 0;
  }
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
`;
