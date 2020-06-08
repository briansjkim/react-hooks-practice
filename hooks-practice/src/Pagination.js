import React from 'react';
import './App.css';

const Pagination = ({ totalPics, picsPerPage, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPics / picsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="Pagination">
            {pageNumbers.map( (number, idx) => (
                <a onClick={() => paginate(number)} key={idx} href="!#">
                    {number}
                </a>
            ))}
        </nav>
    )
}

export default Pagination;
