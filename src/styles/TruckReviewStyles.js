import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

// Inline styles in FieldSet, P tag ,h1 (spacing)
export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -3,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -16,
    marginLeft: -12
  }
}));

export const Inputtextarea = styled.textarea`
  display: flex;
  line-height: 1.44em;
  border: 0;
  outline: none;
  padding: 0;
  resize: none;
  width: 100%;
  height: 25vh;
  font-size: 1.8rem;

  ::placeholder {
    font-size: 1rem;
    color: gray;
  }
`;
export const StyledTitleInput = styled.input`
  line-height: 1.44em;
  font-size: 1.5rem;
  width: 100%;
  max-width: 592px;
  margin-bottom: 1%;
  height: 30px;
  :invalid {
    box-shadow: 0 0 5px 1px red;
  }

  :focus:invalid {
    box-shadow: none;
  }
  ::placeholder {
    font-size: 1rem;
    color: gray;
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    color: white;

    &:hover {
      background-color: rgb(24, 24, 24);
    }

    font-weight: bold;
    margin-top: 2%;
    margin-bottom: 1%;
    background: black;
    width: 50%;
  }
`;
export const StyledFab = styled(Fab)`
  &&& {
    background-color: black;
    &:hover {
      background-color: rgb(24, 24, 24);
    }

    font-size: 0;
  }
`;

export const StyledRating = styled.div`
  width: 200;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledReviewDiv = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: text;
  padding: 18px;
  max-width: 630px;
`;

export const StyledTruckReviewDiv = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 960px;
  padding: 15px;
`;

export const StyledTruckReviewFormDiv = styled.div`
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  width: 65%;
`;

export const StyledTruckReviewMap = styled.div`
  h2 {
    color: #ffb90f;
    align-self: center;
    margin-bottom: 0;
    text-decoration: underline;
  }
  h3 {
    margin-bottom: 0;
  }
  h4 {
    margin: 0;
  }
  p {
    color: white;
    font-size: 0.8rem;
  }
  margin: 4px, 4px;
  padding: 10px;
  background-color: #5a4e4e;
  height: 80vh;
  overflow-x: auto;
  text-align: justify;

  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 30%;
  border-left: 1px dashed black;
`;
