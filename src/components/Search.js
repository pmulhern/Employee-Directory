import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Card from "./Card";
import API from "../utils/API";
import ColumnHeader from "./ColumnHeader";

class Search extends Component {
  state = {
    employees: [],
  };

  // Activity 23
  componentDidMount() {
    API.search()
      .then(res => {
        console.log(res)
        this.setState({
          employees: res.data.results.map((res, key) => ({
            picture: res.picture.medium,
            firstName: res.name.first,
            lastName: res.name.last,
            dob: res.dob.age,
            email: res.email,
            phone: res.phone,
            key: key
          }))

        })
     
      })
      .catch(error => console.log(error));
  }

// Activity 19 SearchResultsContainer.js line 23
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <div className="container">
      <h1>Employee Directory</h1>

      <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            value={this.state.search}
        />

      <div className="row">
      <table className="table">
      <ColumnHeader
       />
      {this.state.employees.map((res) =>
      <Card
        picture={res.picture}
        firstName={res.firstName}
        lastName={res.lastName}
        dob={res.dob}
        email={res.email}
        phone={res.phone}
        key={res.key}
        />
      )}
      </table>
      </div>

      </div>
    );
  }
}

export default Search;