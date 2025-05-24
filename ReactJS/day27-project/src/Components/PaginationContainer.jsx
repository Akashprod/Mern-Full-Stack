import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const location = useLocation();
  const { pathname, search } = location;

  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);

    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="mt-8 mb-8 flex justify-end">
      <div className="join">
        <button
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = page;
            handlePageChange(prevPage);
          }}
          className="btn btn-xs sm:btn-md join-item"
        >
          prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              onClick={() => handlePageChange(pageNumber)}
              key={pageNumber}
              className={`btn btn-xs sm:btn-md join-item ${
                pageNumber === page ? "bg-base-300 border-base-100" : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
          className="btn btn-xs sm:btn-md join-item"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
