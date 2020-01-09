import React from 'react';


var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "15px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "5px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '30px',
width: '100%',
}

function Footer({ children }) {
  return (
      <div>
          <div style={phantom} />
          <div style={style}>
              { children }
             &copy;Copyright Food Truck Tracker, 2020
          </div>
      </div>
  )
}

export default Footer