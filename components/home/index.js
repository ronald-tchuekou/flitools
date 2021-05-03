import React from 'react';
import Carousel from "./carousel";;
import Cat_product from "./cat_product";
import Constants from "../../constants";

const PRODUCTS = Constants.PRODUCTS;

export default function ({lang}) {
    return (
        <>
            {/* BEGIN: Content */}
            <div className="app-content content ecommerce-application">
                <div className="content-wrapper">
                    <div className="content-body">

                        <Carousel lang={lang}/>

                        <section id="ecommerce-products" className="my-25">
                            <Cat_product title={"Telephones"} lang={lang} list={PRODUCTS.slice(0, 3)}/>
                            <Cat_product title={"Ordinateurs"} lang={lang} list={PRODUCTS.slice(4, 7)}/>
                            <Cat_product title={"Montres"} lang={lang} list={PRODUCTS.slice(7, 10)}/>
                            <Cat_product title={"Accessoires"} lang={lang} list={PRODUCTS.slice(10, 13)}/>
                            <Cat_product title={"Logiciels"} lang={lang} list={PRODUCTS.slice(13, 16)}/>
                        </section>
                        {/* E-commerce Products Ends */}

                    </div>
                </div>
            </div>

            {/* END: Content */}
        </>
    )
}
