import React from 'react';
import './App.css';
import {connect} from 'react-redux';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
      users: state.users

    };
};

export default connect(
  mapStateToProps,
  {}
  )(App);
