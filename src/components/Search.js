import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Card from "./Card";
import API from "../utils/API";
import ColumnHeader from "./ColumnHeader";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    order: ""
  };

  // Activity 23
  componentDidMount() {
    API.search()
      .then(res => {
        console.log(res)
        var employees = res.data.results.map((res) => ({
          picture: res.picture.medium,
          firstName: res.name.first,
          lastName: res.name.last,
          dob: res.dob.age,
          email: res.email,
          phone: res.phone,
        }))
        this.setState({
          employees, 
          filteredEmployees: employees
        })
     
      })
      .catch(error => console.log(error));
  }



  handleFormSubmit = search => {
    // event.preventDefault();
    console.log(search)
    var employees = this.state.employees;
    var newEmployees = [];
    for (let i = 0; i < employees.length; i++) {  
      if(employees[i].firstName == search || employees[i].lastName == search ) {
          newEmployees.push(employees[i])
        } 
      
    } 
    console.log(newEmployees)
    this.setState({
      employees: newEmployees
    })
    
  };



  render() {
    return (
      <div className="container">
      <h1>Employee Directory</h1>

      <SearchForm
            // value={this.state.value}
            handleFormSubmit={this.handleFormSubmit}
            // handleInputChange={this.handleInputChange}
            
        />

      <div className="row">
      <table className="table">
      <thead className="thead-dark">
      <ColumnHeader
       />
      </thead>

      <tbody>
      {this.state.employees.map((res, key) =>
      <Card
        picture={res.picture}
        firstName={res.firstName}
        lastName={res.lastName}
        dob={res.dob}
        email={res.email}
        phone={res.phone}
        key={key}
        />
      )}
      </tbody>
      </table>
      </div>

      </div>
    );
  }
}

export default Search;