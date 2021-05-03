import React from 'react';
import Rating from "./rating";
import Lang from "../../src/lang";
import {setToastMessage} from "../../src/libs/utils";

/**
 * Function that  show the description of the product.
 * @param {string} lang
 * @param {{
 *     id: number,
 *     description: string,
 *     price: number,
 *     name: string,
 *     category: string,
 *     img_url: string
 * }} item
 * @returns {JSX.Element}
 */
export default function ({lang, item}) {
    /**
     * Function that set to the command view.
     * @param item
     */
    const setToCommandView = (item) => {
        // TODO
    };
    /**
     * Function that set a command to the cart.
     * @param item
     */
    const addToCart = (item) => {
        setToastMessage('success', 'A new message',
            'bla bla bla', 'ltr');
    };
    return (
        <div className="card ecommerce-card">
            <div className="item-img text-center">
                <a href={`/product-detail?id=${item.id}`}>
                    <img
                        className="img-fluid card-img-top"
                        src={item.img_url}
                        alt={item.name}/>
                </a>
            </div>
            <div className="card-body">
                <div className="item-wrapper">
                    <Rating lang={lang}/>
                    <div>
                        <h6 className="item-price">{item.price} FCFA</h6>
                    </div>
                </div>
                <h6 className="item-name">
                    <a className="text-body" href="">{item.name}</a>
                    <span className="card-text item-company">By <a href="" className="company-name">Apple</a></span>
                </h6>
                <p className="card-text item-description">
                    {item.description}
                </p>
            </div>
            <div className="item-options text-center">
                <div className="item-wrapper">
                    <div className="item-cost">
                        <h4 className="item-price">{item.price} FCFA</h4>
                    </div>
                </div>
                <button className="btn btn-light btn-wishlist">
                    <i data-feather="shopping-bag"> </i>
                    <span>{Lang.product.quick_cmd[lang]}</span>
                </button>
                <button onClick={() => addToCart(item)} className="btn btn-primary btn-cart">
                    <i data-feather="shopping-cart"> </i>
                    <span className="add-to-cart">{Lang.product.add_to_cart[lang]}</span>
                </button>
            </div>
        </div>
    );
}
