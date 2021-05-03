import React from 'react';
import Lang from "../../src/lang";

const Preview = ({lang}) => {
    return (
        <div className="card-body">
            <div className="row my-2">
                <div className="col-12 col-md-5 d-flex align-items-center justify-content-center mb-2 mb-md-0">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src="/app-assets/images/pages/eCommerce/1.png" className="img-fluid product-img" alt="product image" />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <h4>Apple Watch Series 5</h4>
                    <span className="card-text item-company">By <a href="" className="company-name">Apple</a></span>
                    <div className="ecommerce-details-price d-flex flex-wrap mt-1">
                        <h4 className="item-price mr-1">$499.99</h4>
                        <ul className="unstyled-list list-inline pl-1 border-left">
                            <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                            <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                            <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                            <li className="ratings-list-item"><i data-feather="star" className="filled-star"> </i></li>
                            <li className="ratings-list-item"><i data-feather="star" className="unfilled-star"> </i></li>
                        </ul>
                    </div>
                    <p className="card-text">Available - <span className="text-success">In stock</span></p>
                    <p className="card-text">
                        GPS, Always-On Retina display, 30% larger screen, Swimproof, ECG app, Electrical and optical heart sensors, Built-in compass, Elevation, Emergency SOS, Fall Detection, S5 SiP with up to 2x faster 64-bit
                        dual-core processor, watchOS 6 with Activity trends, cycle tracking, hearing health innovations, and the App Store on your wrist
                    </p>
                    <ul className="product-features list-unstyled">
                        <li><i data-feather="shopping-cart"> </i> <span>Free Shipping</span></li>
                        <li>
                            <i data-feather="dollar-sign"> </i>
                            <span>EMI options available</span>
                        </li>
                    </ul>
                    <hr />
                    <div className="product-color-options">
                        <h6>Colors</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="d-inline-block selected">
                                <div className="color-option b-primary">
                                    <div className="filloption bg-primary"> </div>
                                </div>
                            </li>
                            <li className="d-inline-block">
                                <div className="color-option b-success">
                                    <div className="filloption bg-success"> </div>
                                </div>
                            </li>
                            <li className="d-inline-block">
                                <div className="color-option b-danger">
                                    <div className="filloption bg-danger"> </div>
                                </div>
                            </li>
                            <li className="d-inline-block">
                                <div className="color-option b-warning">
                                    <div className="filloption bg-warning"> </div>
                                </div>
                            </li>
                            <li className="d-inline-block">
                                <div className="color-option b-info">
                                    <div className="filloption bg-info"> </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="d-flex flex-column flex-sm-row pt-1">
                        <button className="btn btn-primary mr-0 mr-sm-1 mb-1 mb-sm-0">
                            <i data-feather="shopping-cart" className="mr-50"> </i>
                            <span className="add-to-cart">{Lang.product.add_to_cart[lang]}</span>
                        </button>
                        <button className="btn btn-outline-secondary mr-0 mr-sm-1 mb-1 mb-sm-0">
                            <i data-feather="shopping-bag" className="mr-50"> </i>
                            <span>{Lang.product.quick_cmd[lang]}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preview;
