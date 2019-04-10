import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { personFetchData } from '../actions/persons';

class App extends Component {
   
     conmponentDidMount() {
      this.props.fetchData("/api/persons/")
     }
    render() {
      console.log(this.props.persons)
      return <div>
      <ul>{this.props.persons.map((person, i) => 
       <li key={i}>
          {person.name}
       </li>
      )}       
      </ul>
      </div> 
  }
}

const mapStateToProps = state => ({
  persons: state.persons
})

const mapDispatchToProps = dispatch => ({
  fetchData: url=>dispatch(personFetchData(url))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(App);
