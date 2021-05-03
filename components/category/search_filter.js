import React from 'react';

const SearchFilter = ({lang}) => {

    return (
        <section id="ecommerce-searchbar" className="ecommerce-searchbar">
            <div className="row mt-1">
                <div className="col-sm-12">
                    <div className="input-group input-group-merge">
                        <input type="text" className="form-control search-product" id="shop-search"
                               placeholder="Search Product" aria-label="Search..."
                               aria-describedby="shop-search"/>
                        <div className="input-group-append">
                            <span className="input-group-text">
                                <i data-feather="search" className="text-muted"> </i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchFilter;
