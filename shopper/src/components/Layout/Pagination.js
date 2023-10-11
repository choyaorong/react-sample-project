import React from 'react';
import './Pagination.module.css';

const Pagination = ({ items, currentPage, itemsPerPage, onPageChange }) => {
    // Calculate the total number of pages
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Create an array to represent the pages
    const pageArray = [...Array(totalPages).keys()];

    return (
        <div className="pagination">
            {pageArray.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page + 1)} // Page numbers start from 1
                    className={currentPage === page + 1 ? 'active' : ''}
                >
                    {page + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
