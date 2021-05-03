import React from 'react';

/**
 * Function to defined the not about thi product.
 * @param {string} lang
 * @returns {JSX.Element}
 */
export default function Rating ({lang}) {
    return (
        <div className="item-rating">
            <ul className="unstyled-list list-inline">
                <li className="ratings-list-item">
                    <i data-feather="star" className="filled-star"> </i>
                </li>
                <li className="ratings-list-item">
                    <i data-feather="star" className="filled-star"> </i>
                </li>
                <li className="ratings-list-item">
                    <i data-feather="star" className="filled-star"> </i>
                </li>
                <li className="ratings-list-item">
                    <i data-feather="star" className="filled-star"> </i>
                </li>
                <li className="ratings-list-item">
                    <i data-feather="star" className="unfilled-star"> </i>
                </li>
            </ul>
        </div>
    );
}
