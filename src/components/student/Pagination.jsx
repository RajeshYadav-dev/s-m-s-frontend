import React, { useState } from "react";

const Pagination = ({ currentPage, totalPage, pageOnChange }) => {
  const generatePage = () => {
    const page = [];
    for (let i = 1; i <= totalPage; i++) {
      page.push(i);
    }
    return page;
  };

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2 mb-5">
        <button
          style={{ color: "red" }}
          onClick={() => pageOnChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Pre
        </button>

        {generatePage().map((pageNo, index) => (
          <button
            style={{ color: "red" }}
            key={index}
            onClick={() => pageOnChange(pageNo)}
          >
            {pageNo}
          </button>
        ))}

        <button
          style={{ color: "red" }}
          onClick={() => pageOnChange(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
