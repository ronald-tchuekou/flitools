import React from 'react';
import {Product} from "../index";
import Lang from "../../src/lang";

/**
 * Function to manage the simple category of products.
 * @param {string} lang
 * @param {string} title
 * @param {Array} list
 * @returns {*}
 * @constructor
 */
const Cat_product = ({lang, title, list}) => {
    return (
        <section className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="label title">{title}</h2>
                <a href={`/category?title=${title}`} className="link link-danger text-bold">{Lang.product.see_more[lang]}</a>
            </div>
            <div className="grid-view">
                {list.map((item, i) => {
                    return <Product lang={lang} item={item} key={i}/>
                })}
            </div>
        </section>
    );
}

export default Cat_product;
