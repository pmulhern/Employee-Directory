// SearchForm Pulled from Activity 23 Components -> Search Form -> index.js
import React from "react";

class SearchForm extends React.Component {
  state={
    search: ""

  }
  // Activity 19 SearchResultsContainer.js line 23
  handleInputChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  render(){


 
  return (
    <>
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
          id="search"
        />
        <br />
      </div>
    </form>
        
    <button onClick={() => this.props.handleFormSubmit(this.state.search)}className="btn btn-primary">
      Search
    </button>
      
  
    </>
  );
  }
}

export default SearchForm;