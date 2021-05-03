import React from 'react';

const Filter = ({lang}) => {
    return (
        <div className="sidebar-detached sidebar-left">
            <div className="sidebar">

                {/* Ecommerce Sidebar Starts */}
                <div className="sidebar-shop my-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="filter-heading d-none d-lg-block">Filters</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            {/* Price Filter starts */}
                            <div className="multi-range-price">
                                <h6 className="filter-title mt-0">Multi Range</h6>
                                <ul className="list-unstyled price-range" id="price-range">
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="priceAll" name="price-range"
                                                   className="custom-control-input" checked/>
                                            <label className="custom-control-label"
                                                   htmlFor="priceAll">All</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="priceRange1" name="price-range"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label"
                                                   htmlFor="priceRange1">&lt;=$10</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="priceRange2" name="price-range"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="priceRange2">$10 -
                                                $100</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="priceARange3" name="price-range"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="priceARange3">$100
                                                - $500</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="priceRange4" name="price-range"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="priceRange4">&gt;=
                                                $500</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* Price Filter ends */}

                            {/* Price Slider starts */}
                            <div className="price-slider">
                                <h6 className="filter-title">Price Range</h6>
                                <div className="price-slider">
                                    <div className="range-slider mt-2" id="price-slider"> </div>
                                </div>
                            </div>
                            {/* Price Range ends */}

                            {/* Categories Starts */}
                            <div id="product-categories">
                                <h6 className="filter-title">Categories</h6>
                                <ul className="list-unstyled categories-list">
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="category1" name="category-filter"
                                                   className="custom-control-input" checked/>
                                            <label className="custom-control-label"
                                                   htmlFor="category1">Appliances</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="category2" name="category-filter"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label"
                                                   htmlFor="category2">Audio</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="category3" name="category-filter"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="category3">Cameras
                                                & Camcorders</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="category4" name="category-filter"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="category4">Car
                                                Electronics & GPS</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="category5" name="category-filter"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="category5">Cell
                                                Phones</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="category6" name="category-filter"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="category6">Computers
                                                & Tablets</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="category7" name="category-filter"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="category7">Health,
                                                Fitness & Beauty</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="category8" name="category-filter"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="category8">Office &
                                                School Supplies</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="category9" name="category-filter"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="category9">TV &
                                                Home Theater</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="category10" name="category-filter"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="category10">Video
                                                Games</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* Categories Ends */}

                            {/* Brands starts */}
                            <div className="brands">
                                <h6 className="filter-title">Brands</h6>
                                <ul className="list-unstyled brand-list">
                                    <li>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="productBrand1"/>
                                            <label className="custom-control-label"
                                                   htmlFor="productBrand1">Insignia™</label>
                                        </div>
                                        <span>746</span>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="productBrand2" checked/>
                                            <label className="custom-control-label"
                                                   htmlFor="productBrand2">Samsung</label>
                                        </div>
                                        <span>633</span>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="productBrand3"/>
                                            <label className="custom-control-label"
                                                   htmlFor="productBrand3">Metra</label>
                                        </div>
                                        <span>591</span>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="productBrand4"/>
                                            <label className="custom-control-label"
                                                   htmlFor="productBrand4">HP</label>
                                        </div>
                                        <span>530</span>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="productBrand5" checked/>
                                            <label className="custom-control-label"
                                                   htmlFor="productBrand5">Apple</label>
                                        </div>
                                        <span>442</span>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="productBrand6"/>
                                            <label className="custom-control-label"
                                                   htmlFor="productBrand6">GE</label>
                                        </div>
                                        <span>394</span>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="productBrand7"/>
                                            <label className="custom-control-label"
                                                   htmlFor="productBrand7">Sony</label>
                                        </div>
                                        <span>350</span>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="productBrand8"/>
                                            <label className="custom-control-label"
                                                   htmlFor="productBrand8">Incipio</label>
                                        </div>
                                        <span>320</span>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="productBrand9"/>
                                            <label className="custom-control-label"
                                                   htmlFor="productBrand9">KitchenAid</label>
                                        </div>
                                        <span>318</span>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="productBrand10"/>
                                            <label className="custom-control-label"
                                                   htmlFor="productBrand10">Whirlpool</label>
                                        </div>
                                        <span>298</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Brand ends */}

                            {/* Rating starts */}
                            <div id="ratings">
                                <h6 className="filter-title">Ratings</h6>
                                <div className="ratings-list">
                                    <a href="javascript:void(0)">
                                        <ul className="unstyled-list list-inline">
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="filled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="filled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="filled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="filled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="unfilled-star"> </i>
                                            </li>
                                            <li>& up</li>
                                        </ul>
                                    </a>
                                    <div className="stars-received">160</div>
                                </div>
                                <div className="ratings-list">
                                    <a href="javascript:void(0)">
                                        <ul className="unstyled-list list-inline">
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="filled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="filled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="filled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="unfilled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="unfilled-star"> </i>
                                            </li>
                                            <li>& up</li>
                                        </ul>
                                    </a>
                                    <div className="stars-received">176</div>
                                </div>
                                <div className="ratings-list">
                                    <a href="javascript:void(0)">
                                        <ul className="unstyled-list list-inline">
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="filled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="filled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="unfilled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="unfilled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="unfilled-star"> </i>
                                            </li>
                                            <li>& up</li>
                                        </ul>
                                    </a>
                                    <div className="stars-received">291</div>
                                </div>
                                <div className="ratings-list">
                                    <a href="javascript:void(0)">
                                        <ul className="unstyled-list list-inline">
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="filled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="unfilled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="unfilled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="unfilled-star"> </i>
                                            </li>
                                            <li className="ratings-list-item"><i data-feather="star"
                                                                                 className="unfilled-star"> </i>
                                            </li>
                                            <li>& up</li>
                                        </ul>
                                    </a>
                                    <div className="stars-received">190</div>
                                </div>
                            </div>
                            {/* Rating ends */}

                            {/* Clear Filters Starts */}
                            <div id="clear-filters mb-5">
                                <button type="button" className="btn btn-block btn-primary">
                                    Clear All Filters
                                </button>
                            </div>
                            {/* Clear Filters Ends */}
                            <div style={{height: '100px'}}> </div>
                        </div>
                    </div>
                </div>
                {/* Ecommerce Sidebar Ends */}

            </div>
        </div>
    );
}

export default Filter;
