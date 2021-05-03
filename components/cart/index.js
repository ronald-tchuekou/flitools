import React, {useEffect} from 'react';
import axios from "axios";

export default function ({lang}) {
    useEffect(() => {
        axios.get('http://localhost:8000/api/get-content')
            .then(response => {
                console.log(response);
            }).catch(reason => console.log(reason));
    }, []);
    return(
        <>
            {/* BEGIN: Content*/}
            <div className="app-content content ecommerce-application">
                <div className="content-overlay"> </div>
                <div className="header-navbar-shadow"> </div>
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-9 col-12 mb-2">
                            <div className="row breadcrumbs-top">
                                <div className="col-12">
                                    <h2 className="content-header-title float-left mb-0">Terminer votre commande</h2>
                                    <div className="breadcrumb-wrapper">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                                            <li className="breadcrumb-item active">Panier</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
                            <div className="form-group breadcrumb-right">
                                <div className="dropdown">
                                    <button className="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle"
                                            type="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false"><i data-feather="grid"> </i></button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="app-todo.html"><i className="mr-1"
                                                                                             data-feather="check-square"> </i><span
                                            className="align-middle">Todo</span></a>
                                        <a className="dropdown-item" href="app-chat.html"><i className="mr-1"
                                                                                             data-feather="message-square"> </i><span
                                            className="align-middle">Chat</span></a>
                                        <a className="dropdown-item" href="app-email.html"><i className="mr-1"
                                                                                              data-feather="mail"> </i><span
                                            className="align-middle">Email</span></a>
                                        <a className="dropdown-item" href="app-calendar.html"><i className="mr-1"
                                                                                                 data-feather="calendar"> </i><span
                                            className="align-middle">Calendar</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        <div className="bs-stepper checkout-tab-steps">
                            {/* Wizard starts */}
                            <div className="bs-stepper-header">
                                <div className="step" data-target="#step-cart">
                                    <button type="button" className="step-trigger">
                            <span className="bs-stepper-box">
                                <i data-feather="shopping-cart" className="font-medium-3"> </i>
                            </span>
                                        <span className="bs-stepper-label">
                                <span className="bs-stepper-title">Cart</span>
                                <span className="bs-stepper-subtitle">Your Cart Items</span>
                            </span>
                                    </button>
                                </div>
                                <div className="line">
                                    <i data-feather="chevron-right" className="font-medium-2"> </i>
                                </div>
                                <div className="step" data-target="#step-address">
                                    <button type="button" className="step-trigger">
                            <span className="bs-stepper-box">
                                <i data-feather="home" className="font-medium-3"> </i>
                            </span>
                                        <span className="bs-stepper-label">
                                <span className="bs-stepper-title">Address</span>
                                <span className="bs-stepper-subtitle">Enter Your Address</span>
                            </span>
                                    </button>
                                </div>
                                <div className="line">
                                    <i data-feather="chevron-right" className="font-medium-2"> </i>
                                </div>
                                <div className="step" data-target="#step-payment">
                                    <button type="button" className="step-trigger">
                            <span className="bs-stepper-box">
                                <i data-feather="credit-card" className="font-medium-3"> </i>
                            </span>
                                        <span className="bs-stepper-label">
                                <span className="bs-stepper-title">Payment</span>
                                <span className="bs-stepper-subtitle">Select Payment Method</span>
                            </span>
                                    </button>
                                </div>
                            </div>
                            {/* Wizard ends */}

                            <div className="bs-stepper-content">
                                {/* Checkout Place order starts */}
                                <div id="step-cart" className="content">
                                    <div id="place-order" className="list-view product-checkout">
                                        {/* Checkout Place Order Left starts */}
                                        <div className="checkout-items">
                                            <div className="card ecommerce-card">
                                                <div className="item-img">
                                                    <a href="app-ecommerce-details.html">
                                                        <img src="/app-assets/images/pages/eCommerce/1.png"
                                                             alt="img-placeholder"/>
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <div className="item-name">
                                                        <h6 className="mb-0">
                                                            <a href="app-ecommerce-details.html" className="text-body">Apple Watch Series 5</a></h6>
                                                        <span className="item-company">By <a href="" className="company-name">Apple</a></span>
                                                        <div className="item-rating">
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="text-success mb-1">In Stock</span>
                                                    <div className="item-quantity">
                                                        <span className="quantity-title">Qty:</span>
                                                        <div className="input-group quantity-counter-wrapper">
                                                            <input type="text" className="quantity-counter" value="1"/>
                                                        </div>
                                                    </div>
                                                    <span
                                                        className="delivery-date text-muted">Delivery by, Wed Apr 25</span>
                                                    <span className="text-success">17% off 4 offers Available</span>
                                                </div>
                                                <div className="item-options text-center">
                                                    <div className="item-wrapper">
                                                        <div className="item-cost">
                                                            <h4 className="item-price">$19.99</h4>
                                                            <p className="card-text shipping">
                                                                <span className="badge badge-pill badge-light-success">Free Shipping</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                            className="btn btn-light mt-1 remove-wishlist">
                                                        <i data-feather="x" className="align-middle mr-25"> </i>
                                                        <span>Remove</span>
                                                    </button>
                                                    <button type="button"
                                                            className="btn btn-primary btn-cart move-cart">
                                                        <i data-feather="heart" className="align-middle mr-25"> </i>
                                                        <span className="text-truncate">Add to Wishlist</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card ecommerce-card">
                                                <div className="item-img">
                                                    <a href="app-ecommerce-details.html">
                                                        <img src="/app-assets/images/pages/eCommerce/2.png"
                                                             alt="img-placeholder"/>
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <div className="item-name">
                                                        <h6 className="mb-0">
                                                            <a href="app-ecommerce-details.html" className="text-body">Apple
                                                                iPhone 11 (64GB, Black)</a>
                                                        </h6>
                                                        <span className="item-company">By <a href=""
                                                                                             className="company-name">Apple</a></span>
                                                        <div className="item-rating">
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
                                                                                                     className="filled-star"> </i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="text-success mb-1">In Stock</span>
                                                    <div className="item-quantity">
                                                        <span className="quantity-title">Qty:</span>
                                                        <div className="input-group quantity-counter-wrapper">
                                                            <input type="text" className="quantity-counter" value="1"/>
                                                        </div>
                                                    </div>
                                                    <span
                                                        className="delivery-date text-muted">Delivery by, Wed Apr 24</span>
                                                    <span className="text-success">7% off 1 offers Available</span>
                                                </div>
                                                <div className="item-options text-center">
                                                    <div className="item-wrapper">
                                                        <div className="item-cost">
                                                            <h4 className="item-price">$4999.99</h4>
                                                            <p className="card-text shipping">
                                                                <span className="badge badge-pill badge-light-success">Free Shipping</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                            className="btn btn-light mt-1 remove-wishlist">
                                                        <i data-feather="x" className="align-middle mr-25"> </i>
                                                        <span>Remove</span>
                                                    </button>
                                                    <button type="button"
                                                            className="btn btn-primary btn-cart move-cart">
                                                        <i data-feather="heart" className="align-middle mr-25"> </i>
                                                        <span className="text-truncate">Add to Wishlist</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card ecommerce-card">
                                                <div className="item-img">
                                                    <a href="app-ecommerce-details.html">
                                                        <img src="/app-assets/images/pages/eCommerce/3.png"
                                                             alt="img-placeholder"/>
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <div className="item-name">
                                                        <h6 className="mb-0"><a href="app-ecommerce-details.html"
                                                                                className="text-body">Apple iMac
                                                            27-inch</a></h6>
                                                        <span className="item-company">By <a href=""
                                                                                             className="company-name">Apple</a></span>
                                                        <div className="item-rating">
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="text-success mb-1">In Stock</span>
                                                    <div className="item-quantity">
                                                        <span className="quantity-title">Qty:</span>
                                                        <div className="input-group quantity-counter-wrapper">
                                                            <input type="text" className="quantity-counter" value="1"/>
                                                        </div>
                                                    </div>
                                                    <span
                                                        className="delivery-date text-muted">Delivery by, Wed Apr 27</span>
                                                    <span className="text-success">3% off 1 offers Available</span>
                                                </div>
                                                <div className="item-options text-center">
                                                    <div className="item-wrapper">
                                                        <div className="item-cost">
                                                            <h4 className="item-price">$4499.99</h4>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                            className="btn btn-light mt-1 remove-wishlist">
                                                        <i data-feather="x" className="align-middle mr-25"> </i>
                                                        <span>Remove</span>
                                                    </button>
                                                    <button type="button"
                                                            className="btn btn-primary btn-cart move-cart">
                                                        <i data-feather="heart" className="align-middle mr-25"> </i>
                                                        <span className="text-truncate">Add to Wishlist</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card ecommerce-card">
                                                <div className="item-img">
                                                    <a href="app-ecommerce-details.html">
                                                        <img src="/app-assets/images/pages/eCommerce/4.png"
                                                             alt="img-placeholder"/>
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <div className="item-name">
                                                        <h6 className="mb-0">
                                                            <a href="app-ecommerce-details.html" className="text-body">OneOdio
                                                                A71 Wired Headphones</a>
                                                        </h6>
                                                        <span className="item-company">By <a href=""
                                                                                             className="company-name">OneOdio</a></span>
                                                        <div className="item-rating">
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="text-success mb-1">In Stock</span>
                                                    <div className="item-quantity">
                                                        <span className="quantity-title">Qty:</span>
                                                        <div className="input-group quantity-counter-wrapper">
                                                            <input type="text" className="quantity-counter" value="1"/>
                                                        </div>
                                                    </div>
                                                    <span
                                                        className="delivery-date text-muted">Delivery by, Wed Apr 29</span>
                                                    <span className="text-success">5% off 2 offers Available</span>
                                                </div>
                                                <div className="item-options text-center">
                                                    <div className="item-wrapper">
                                                        <div className="item-cost">
                                                            <h4 className="item-price">$599.99</h4>
                                                            <p className="card-text shipping">
                                                                <span className="badge badge-pill badge-light-success">Free Shipping</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                            className="btn btn-light mt-1 remove-wishlist">
                                                        <i data-feather="x" className="align-middle mr-25"> </i>
                                                        <span>Remove</span>
                                                    </button>
                                                    <button type="button"
                                                            className="btn btn-primary btn-cart move-cart">
                                                        <i data-feather="heart" className="align-middle mr-25"> </i>
                                                        <span className="text-truncate">Add to Wishlist</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card ecommerce-card">
                                                <div className="item-img">
                                                    <a href="app-ecommerce-details.html">
                                                        <img src="/app-assets/images/pages/eCommerce/5.png"
                                                             alt="img-placeholder"/>
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <div className="item-name">
                                                        <h6 className="mb-0">
                                                            <a href="app-ecommerce-details.html" className="text-body">Apple
                                                                - MacBook Air® (Latest Model) - 13.3" Display -
                                                                Silver</a>
                                                        </h6>
                                                        <span className="item-company">By <a href=""
                                                                                             className="company-name">Apple</a></span>
                                                        <div className="item-rating">
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="text-success mb-1">In Stock</span>
                                                    <div className="item-quantity">
                                                        <span className="quantity-title">Qty:</span>
                                                        <div className="input-group quantity-counter-wrapper">
                                                            <input type="text" className="quantity-counter" value="1"/>
                                                        </div>
                                                    </div>
                                                    <span
                                                        className="delivery-date text-muted">Delivery by, Wed Apr 30</span>
                                                    <span className="text-success">3% off 1 offers Available</span>
                                                </div>
                                                <div className="item-options text-center">
                                                    <div className="item-wrapper">
                                                        <div className="item-cost">
                                                            <h4 className="item-price">$649.99</h4>
                                                            <p className="card-text shipping">
                                                                <span className="badge badge-pill badge-light-success">Free Shipping</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                            className="btn btn-light mt-1 remove-wishlist">
                                                        <i data-feather="x" className="align-middle mr-25"> </i>
                                                        <span>Remove</span>
                                                    </button>
                                                    <button type="button"
                                                            className="btn btn-primary btn-cart move-cart">
                                                        <i data-feather="heart" className="align-middle mr-25"> </i>
                                                        <span className="text-truncate">Add to Wishlist</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card ecommerce-card">
                                                <div className="item-img">
                                                    <a href="app-ecommerce-details.html">
                                                        <img src="/app-assets/images/pages/eCommerce/6.png"
                                                             alt="img-placeholder"/>
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <div className="item-name">
                                                        <h6 className="mb-0">
                                                            <a href="app-ecommerce-details.html" className="text-body">Switch
                                                                Pro Controller </a>
                                                        </h6>
                                                        <span className="item-company">By <a href=""
                                                                                             className="company-name">Sharp</a></span>
                                                        <div className="item-rating">
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="text-success mb-1">In Stock</span>
                                                    <div className="item-quantity">
                                                        <span className="quantity-title">Qty:</span>
                                                        <div className="input-group quantity-counter-wrapper">
                                                            <input type="text" className="quantity-counter" value="1"/>
                                                        </div>
                                                    </div>
                                                    <span
                                                        className="delivery-date text-muted">Delivery by, Wed Apr 30</span>
                                                    <span className="text-success">6% off 3 offers Available</span>
                                                </div>
                                                <div className="item-options text-center">
                                                    <div className="item-wrapper">
                                                        <div className="item-cost">
                                                            <h4 className="item-price">$1999.99</h4>
                                                        </div>
                                                    </div>
                                                    <button type="button"
                                                            className="btn btn-light mt-1 remove-wishlist">
                                                        <i data-feather="x" className="align-middle mr-25"> </i>
                                                        <span>Remove</span>
                                                    </button>
                                                    <button type="button"
                                                            className="btn btn-primary btn-cart move-cart">
                                                        <i data-feather="heart" className="align-middle mr-25"> </i>
                                                        <span className="text-truncate">Add to Wishlist</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Checkout Place Order Left ends */}

                                        {/* Checkout Place Order Right starts */}
                                        <div className="checkout-options">
                                            <div className="card">
                                                <div className="card-body">
                                                    <label className="section-label mb-1">Options</label>
                                                    <div className="coupons input-group input-group-merge">
                                                        <input type="text" className="form-control"
                                                               placeholder="Coupons" aria-label="Coupons"
                                                               aria-describedby="input-coupons"/>
                                                        <div className="input-group-append">
                                                            <span className="input-group-text text-primary"
                                                                  id="input-coupons">Apply</span>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div className="price-details">
                                                        <h6 className="price-title">Price Details</h6>
                                                        <ul className="list-unstyled">
                                                            <li className="price-detail">
                                                                <div className="detail-title">Total MRP</div>
                                                                <div className="detail-amt">$598</div>
                                                            </li>
                                                            <li className="price-detail">
                                                                <div className="detail-title">Bag Discount</div>
                                                                <div
                                                                    className="detail-amt discount-amt text-success">-25$
                                                                </div>
                                                            </li>
                                                            <li className="price-detail">
                                                                <div className="detail-title">Estimated Tax</div>
                                                                <div className="detail-amt">$1.3</div>
                                                            </li>
                                                            <li className="price-detail">
                                                                <div className="detail-title">EMI Eligibility</div>
                                                                <a href=""
                                                                   className="detail-amt text-primary">Details</a>
                                                            </li>
                                                            <li className="price-detail">
                                                                <div className="detail-title">Delivery Charges</div>
                                                                <div
                                                                    className="detail-amt discount-amt text-success">Free
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <hr/>
                                                        <ul className="list-unstyled">
                                                            <li className="price-detail">
                                                                <div className="detail-title detail-total">Total</div>
                                                                <div className="detail-amt font-weight-bolder">$574
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <button type="button"
                                                                className="btn btn-primary btn-block btn-next place-order">Place
                                                            Order
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Checkout Place Order Right ends */}
                                        </div>
                                    </div>
                                    {/* Checkout Place order Ends */}
                                </div>
                                {/* Checkout Customer Address Starts */}
                                <div id="step-address" className="content">
                                    <form id="checkout-address" className="list-view product-checkout">
                                        {/* Checkout Customer Address Left starts */}
                                        <div className="card">
                                            <div className="card-header flex-column align-items-start">
                                                <h4 className="card-title">Add New Address</h4>
                                                <p className="card-text text-muted mt-25">Be sure to check "Deliver to
                                                    this address" when you have finished</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="checkout-name">Full Name:</label>
                                                            <input type="text" id="checkout-name"
                                                                   className="form-control" name="fname"
                                                                   placeholder="John Doe"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="checkout-number">Mobile Number:</label>
                                                            <input type="number" id="checkout-number"
                                                                   className="form-control" name="mnumber"
                                                                   placeholder="0123456789"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="checkout-apt-number">Flat, House No:</label>
                                                            <input type="number" id="checkout-apt-number"
                                                                   className="form-control" name="apt-number"
                                                                   placeholder="9447 Glen Eagles Drive"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="checkout-landmark">Landmark e.g. near apollo
                                                                hospital:</label>
                                                            <input type="text" id="checkout-landmark"
                                                                   className="form-control" name="landmark"
                                                                   placeholder="Near Apollo Hospital"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="checkout-city">Town/City:</label>
                                                            <input type="text" id="checkout-city"
                                                                   className="form-control" name="city"
                                                                   placeholder="Tokyo"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="checkout-pincode">Pincode:</label>
                                                            <input type="number" id="checkout-pincode"
                                                                   className="form-control" name="pincode"
                                                                   placeholder="201301"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="checkout-state">State:</label>
                                                            <input type="text" id="checkout-state"
                                                                   className="form-control" name="state"
                                                                   placeholder="California"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="add-type">Address Type:</label>
                                                            <select className="form-control" id="add-type">
                                                                <option>Home</option>
                                                                <option>Work</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="button"
                                                                className="btn btn-primary btn-next delivery-address">Save
                                                            And Deliver Here
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Checkout Customer Address Left ends */}

                                        {/* Checkout Customer Address Right starts */}
                                        <div className="customer-card">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4 className="card-title">John Doe</h4>
                                                </div>
                                                <div className="card-body actions">
                                                    <p className="card-text mb-0">9447 Glen Eagles Drive</p>
                                                    <p className="card-text">Lewis Center, OH 43035</p>
                                                    <p className="card-text">UTC-5: Eastern Standard Time (EST)</p>
                                                    <p className="card-text">202-555-0140</p>
                                                    <button type="button"
                                                            className="btn btn-primary btn-block btn-next delivery-address mt-2">
                                                        Deliver To This Address
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Checkout Customer Address Right ends */}
                                    </form>
                                </div>
                                {/* Checkout Customer Address Ends */}

                                {/* Checkout Payment Starts */}
                                <div id="step-payment" className="content">
                                    <form id="checkout-payment" className="list-view product-checkout"
                                          onSubmit="return false;">
                                        <div className="payment-type">
                                            <div className="card">
                                                <div className="card-header flex-column align-items-start">
                                                    <h4 className="card-title">Payment options</h4>
                                                    <p className="card-text text-muted mt-25">Be sure to click on
                                                        correct payment option</p>
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="card-holder-name my-75">John Doe</h6>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customColorRadio1" name="paymentOptions"
                                                               className="custom-control-input" checked/>
                                                        <label className="custom-control-label"
                                                               htmlFor="customColorRadio1">
                                                            US Unlocked Debit Card 12XX XXXX XXXX 0000
                                                        </label>
                                                    </div>
                                                    <div className="customer-cvv mt-1">
                                                        <div className="form-inline">
                                                            <label className="mb-50" htmlFor="card-holder-cvv">Enter
                                                                CVV:</label>
                                                            <input type="password"
                                                                   className="form-control ml-sm-75 ml-0 mb-50 input-cvv"
                                                                   name="input-cvv" id="card-holder-cvv"/>
                                                            <button type="button"
                                                                    className="btn btn-primary btn-cvv ml-0 ml-sm-1 mb-50">Continue
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <hr className="my-2"/>
                                                    <ul className="other-payment-options list-unstyled">
                                                        <li className="py-50">
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="customColorRadio2"
                                                                       name="paymentOptions"
                                                                       className="custom-control-input"/>
                                                                <label className="custom-control-label"
                                                                       htmlFor="customColorRadio2"> Credit / Debit / ATM
                                                                    Card </label>
                                                            </div>
                                                        </li>
                                                        <li className="py-50">
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="customColorRadio3"
                                                                       name="paymentOptions"
                                                                       className="custom-control-input"/>
                                                                <label className="custom-control-label"
                                                                       htmlFor="customColorRadio3"> Net Banking </label>
                                                            </div>
                                                        </li>
                                                        <li className="py-50">
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="customColorRadio4"
                                                                       name="paymentOptions"
                                                                       className="custom-control-input"/>
                                                                <label className="custom-control-label"
                                                                       htmlFor="customColorRadio4"> EMI (Easy
                                                                    Installment) </label>
                                                            </div>
                                                        </li>
                                                        <li className="py-50">
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="customColorRadio5"
                                                                       name="paymentOptions"
                                                                       className="custom-control-input"/>
                                                                <label className="custom-control-label"
                                                                       htmlFor="customColorRadio5"> Cash On
                                                                    Delivery </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <hr className="my-2"/>
                                                    <div className="gift-card mb-25">
                                                        <p className="card-text">
                                                            <i data-feather="plus-circle"
                                                               className="mr-50 font-medium-5"> </i>
                                                            <span className="align-middle">Add Gift Card</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="amount-payable checkout-options">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4 className="card-title">Price Details</h4>
                                                </div>
                                                <div className="card-body">
                                                    <ul className="list-unstyled price-details">
                                                        <li className="price-detail">
                                                            <div className="details-title">Price of 3 items</div>
                                                            <div className="detail-amt">
                                                                <strong>$699.30</strong>
                                                            </div>
                                                        </li>
                                                        <li className="price-detail">
                                                            <div className="details-title">Delivery Charges</div>
                                                            <div className="detail-amt discount-amt text-success">Free
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <hr/>
                                                    <ul className="list-unstyled price-details">
                                                        <li className="price-detail">
                                                            <div className="details-title">Amount Payable</div>
                                                            <div className="detail-amt font-weight-bolder">$699.30</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* Checkout Payment Ends */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* END: Content*/}

            <div className="sidenav-overlay"> </div>
            <div className="drag-target"> </div>
        </>

    )
}
