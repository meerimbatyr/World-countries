import "./App.css";

import React, { Component } from "react";
import Countries from "./components/Countries";
import data from "./dummiecountries";
import { Pagination } from "reactstrap";

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
    this.setState({ countries: data });
  };
  componentDidMount() {
    this.fetchDummieData();
  }
  render() {
    const propPagination = {
      numPages: this.state.numPages,
      contries: this.state.countries,
    };
    console.log(propPagination);

    return (
      <>
        {/* <Pagination {...propPagination} /> */}

        {/* <Countries /> */}
      </>
    );
  }
}

export default App;
