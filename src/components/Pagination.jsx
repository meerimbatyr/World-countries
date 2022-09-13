import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Country from "./Country";

export default class PaginationWrapper extends React.Component {
  constructor(props) {
    super();
    const itemsPerPage = 16;
    this.state = {
      countries: props.countries,
      numPages: props.numPages,
      currentPage: 1,
      itemsPerPage,
      countriesPerPage: [],
      maxPages: Math.ceil(props.countries.length / itemsPerPage),
    };
  }

  updateCountriesPerPage = (currentPage) => {
    const { countries, itemsPerPage } = this.state;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const countriesPerPage = countries.slice(startIndex, endIndex);
    this.setState((prev) => ({
      ...prev,
      countriesPerPage,
      currentPage,
    }));
  };

  // setCurrentPage = (newCurrentPage) => {
  //   const { maxPages, itemsPerPage } = this.state;
  //   if (newCurrentPage < 1 || newCurrentPage > maxPages) return;
  //   this.setState({ ...this.state, currentPage: newCurrentPage });
  //   this.updateCountriesPerPage(newCurrentPage, itemsPerPage);
  // };

  componentDidMount() {
    this.updateCountriesPerPage(1);
  }

  handleFirstPage = () => {
    this.updateCountriesPerPage(1);
  };

  handlePrevPage = () => {
    const { currentPage } = this.state;
    const newCurrentPage = currentPage - 1;
    if (currentPage <= 1) return;
    this.setState({ currentPage: newCurrentPage });
    this.updateCountriesPerPage(newCurrentPage);
  };

  handleNextPage = () => {
    const { currentPage, maxPages } = this.state;
    const newCurrentPage = currentPage + 1;
    if (currentPage >= maxPages) return;
    this.setState({ currentPage: newCurrentPage });
    this.updateCountriesPerPage(newCurrentPage);
  };

  handleLastPage = () => {
    const { maxPages } = this.state;
    this.updateCountriesPerPage(maxPages);
  };

  render() {
    const { countries, currentPage, numPages, countriesPerPage, maxPages } =
      this.state;

    const arrayPages = [];
    for (let i = 1; i <= numPages; i++) {
      arrayPages.push(
        <PaginationItem
          key={`${i}`}
          active={i === currentPage}
          onClick={() => this.updateCountriesPerPage(i)}
        >
          <PaginationLink href="#">{i}</PaginationLink>
        </PaginationItem>
      );
    }
    return (
      <>
        <div className="pagination">
          <h5>{countries.length} Countries</h5>
          <h5>
            Page {currentPage}/{maxPages}
          </h5>
          <div>
            <Pagination>
              <PaginationItem
                disabled={currentPage === 1}
                onClick={this.handleFirstPage}
              >
                <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem
                disabled={currentPage === 1}
                onClick={this.handlePrevPage}
              >
                <PaginationLink href="#" previous />
              </PaginationItem>
              {arrayPages}
              <PaginationItem
                disabled={currentPage === maxPages}
                onClick={this.handleNextPage}
              >
                <PaginationLink href="#" next />
              </PaginationItem>
              <PaginationItem
                disabled={currentPage === maxPages}
                onClick={this.handleLastPage}
              >
                <PaginationLink href="#" last />
              </PaginationItem>
            </Pagination>
          </div>
        </div>
        <div className="wrapper">
          {countriesPerPage.map((country, index) => {
            return <Country country={country} key={index} />;
          })}
        </div>
      </>
    );
  }
}
