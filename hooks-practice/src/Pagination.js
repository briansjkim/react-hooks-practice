import React from 'react';

const Pagination = ({ totalPics, picsPerPage, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPics / picsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
