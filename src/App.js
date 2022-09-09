import "./App.css";

import React, { Component } from "react";
import data from "./dummiecountries";
import PaginationWrapper from "./components/Pagination";

class App extends Component {
  constructor() {
    super();
    this.state = { countries: [], numPages: 5 };
  }
  fetchData = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    this.setState({ countries: data });
  };

  fetchDummieData = () => {
    this.setState({ ...this.state, countries: data });
  };
  componentDidMount() {
    this.fetchData();
    // this.fetchDummieData();
  }
  render() {
    const propPagination = {
      numPages: this.state.numPages,
      countries: this.state.countries,
    };
    // console.log(propPagination);

    return (
      <>
        <div className="box">
          <h2>WORLD COUNTRIES WITH REST API</h2>
          <hr />
          {this.state.countries.length > 0 && (
            <PaginationWrapper {...propPagination} />
          )}
        </div>
      </>
    );
  }
}

export default App;
