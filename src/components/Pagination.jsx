import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Country from "./Country";

export default function Pagination({ propPagination }) {
  const { numPages, countries } = propPagination;
  console.log(propPagination);

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 16;
  const numOfPages = Math.ceil(countries.length / itemPerPage);
  const arrayPages = [];

  for (let i = 1; i <= numPages; i++) {
    arrayPages.push(
      <PaginationItem>
        <PaginationLink href="#">{i}</PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <>
      <div className="pagination">
        <h5>{length.length} Countries</h5>
        <h5>Page 1/16 </h5>
        <div>
          <Pagination>
            <PaginationItem onClick={setCurrentPage(1)}>
              <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem onClick={setCurrentPage(currentPage - 1)}>
              <PaginationLink href="#" previous />
            </PaginationItem>
            {arrayPages}
            <PaginationItem onClick={setCurrentPage(currentPage + 1)}>
              <PaginationLink href="#" next />
            </PaginationItem>
            <PaginationItem onClick={setCurrentPage(numOfPages)}>
              <PaginationLink href="#" last />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
      {countries.map((country) => {
        return <Country country={country} />;
      })}
    </>
  );
}
