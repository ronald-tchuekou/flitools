import React from 'react';
import Constants from "../../constants";
import {Product} from "../index";
import Filter from "./filter";
import SearchFilter from "./search_filter";
import Lang from "../../src/lang";
import {useRouter} from "next/router";

export default function ({lang}) {
    const router = useRouter();
    const {title} = router.query;
    return(
        <div className="app-content content ecommerce-application">
            <h2 className="label title">{Lang.category.title[lang]} : {title}</h2>
            <div className="content-wrapper">
                <div className="content-detached content-right">
                    <div className="content-body">

                        {/* E-commerce Content Section Starts */}
                        <section id="ecommerce-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="ecommerce-header-items">
                                        <div className="result-toggler">
                                            <button className="navbar-toggler shop-sidebar-toggler" type="button"
                                                    data-toggle="collapse">
                                                <span className="navbar-toggler-icon d-block d-lg-none"><i
                                                    data-feather="menu"> </i></span>
                                            </button>
                                        </div>
                                        <div className="view-options d-flex">
                                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label
                                                    className="btn btn-icon btn-outline-primary view-btn grid-view-btn">
                                                    <input type="radio" name="radio_options" id="radio_option1"
                                                           checked/>
                                                    <i data-feather="grid" className="font-medium-3"> </i>
                                                </label>
                                                <label
                                                    className="btn btn-icon btn-outline-primary view-btn list-view-btn">
                                                    <input type="radio" name="radio_options" id="radio_option2"/>
                                                    <i data-feather="list" className="font-medium-3"> </i>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* E-commerce Content Section Starts */}

                        {/* background Overlay when sidebar is shown  starts*/}
                        <div className="body-content-overlay"> </div>
                        {/* background Overlay when sidebar is shown  ends*/}

                        {/* E-commerce Search Bar Starts */}
                        <SearchFilter lang={lang}/>
                        {/* E-commerce Search Bar Ends */}

                        {/* E-commerce Products Starts */}
                        <section id="ecommerce-products" className="grid-view">
                            {Constants.PRODUCTS.map((item, i) => {
                                return <Product lang={lang} item={item} key={i}/>
                            })}
                        </section>
                        {/* E-commerce Products Ends */}

                    </div>
                </div>
                <Filter lang={lang}/>
            </div>
        </div>
    )
}
