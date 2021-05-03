import React from 'react';


const Relates = ({lang}) => {
    return (
        <div className="card-body">
            <div className="mt-4 mb-2 text-center">
                <h4>Related Products</h4>
                <p className="card-text">People also search for this items</p>
            </div>
            <div className="swiper-responsive-breakpoints swiper-container px-4 py-2">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <a href="">
                            <div className="item-heading">
                                <h5 className="text-truncate mb-0">Apple Watch Series 6</h5>
                                <small className="text-body">by Apple</small>
                            </div>
                            <div className="img-container w-50 mx-auto py-75">
                                <img src="/app-assets/images/elements/apple-watch.png" className="img-fluid" alt="image" />
                            </div>
                            <div className="item-meta">
                                <ul className="unstyled-list list-inline mb-25">
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star"> </i></li>
                                </ul>
                                <p className="card-text text-primary mb-0">$399.98</p>
                            </div>
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="">
                            <div className="item-heading">
                                <h5 className="text-truncate mb-0">Apple MacBook Pro - Silver</h5>
                                <small className="text-body">by Apple</small>
                            </div>
                            <div className="img-container w-50 mx-auto py-50">
                                <img src="/app-assets/images/elements/macbook-pro.png" className="img-fluid" alt="image" />
                            </div>
                            <div className="item-meta">
                                <ul className="unstyled-list list-inline mb-25">
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star"> </i></li>
                                </ul>
                                <p className="card-text text-primary mb-0">$2449.49</p>
                            </div>
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="">
                            <div className="item-heading">
                                <h5 className="text-truncate mb-0">Apple HomePod (Space Grey)</h5>
                                <small className="text-body">by Apple</small>
                            </div>
                            <div className="img-container w-50 mx-auto py-75">
                                <img src="/app-assets/images/elements/homepod.png" className="img-fluid" alt="image" />
                            </div>
                            <div className="item-meta">
                                <ul className="unstyled-list list-inline mb-25">
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star"> </i></li>
                                </ul>
                                <p className="card-text text-primary mb-0">$229.29</p>
                            </div>
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="">
                            <div className="item-heading">
                                <h5 className="text-truncate mb-0">Magic Mouse 2 - Black</h5>
                                <small className="text-body">by Apple</small>
                            </div>
                            <div className="img-container w-50 mx-auto py-75">
                                <img src="/app-assets/images/elements/magic-mouse.png" className="img-fluid" alt="image" />
                            </div>
                            <div className="item-meta">
                                <ul className="unstyled-list list-inline mb-25">
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                </ul>
                                <p className="card-text text-primary mb-0">$90.98</p>
                            </div>
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="">
                            <div className="item-heading">
                                <h5 className="text-truncate mb-0">iPhone 12 Pro</h5>
                                <small className="text-body">by Apple</small>
                            </div>
                            <div className="img-container w-50 mx-auto py-75">
                                <img src="/app-assets/images/elements/iphone-x.png" className="img-fluid" alt="image" />
                            </div>
                            <div className="item-meta">
                                <ul className="unstyled-list list-inline mb-25">
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                                    <li className="ratings-list-item"><i data-feather="star" className="unfilled-star"> </i></li>
                                </ul>
                                <p className="card-text text-primary mb-0">$1559.99</p>
                            </div>
                        </a>
                    </div>
                </div>
                {/* Add Arrows */}
                <div className="swiper-button-next"> </div>
                <div className="swiper-button-prev"> </div>
            </div>
        </div>
    );
}

export default Relates;
