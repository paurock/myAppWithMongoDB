import React, { Component, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { personFetchData } from '../actions/persons';

const App = () => {
   
    useEffect(() => {
      props.fetchData("/api/persons")
    })
    return (
      <div className="App">
        <ul>
          <li>
          </li>
        </ul>
      </div>
    );
  }
 

const mapStateToProps = state => ({
  persons: state.persons
})

const mapDispatchToProps = dispatch =>   ({
    fetchData: url => dispatch(personFetchData(url))
  })
 

export default connect(mapStateToProps, mapDispatchToProps)(App);
