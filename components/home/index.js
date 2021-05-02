import React from 'react';
import Carousel from "./carousel";

export default function ({lang}) {
    return (
        <>
            {/* BEGIN: Content */}
            <div className="app-content content ecommerce-application">
                <div className="content-wrapper">
                    <div className="content-body">

                        <Carousel lang={lang}/>

                            {/* E-commerce Products Starts */}
                            <section id="ecommerce-products" className="grid-view">
                                <div className="card ecommerce-card">
                                    <div className="item-img text-center">
                                        <a href="">
                                            <img
                                                className="img-fluid card-img-top"
                                                src="/app-assets/images/pages/eCommerce/1.png"
                                                alt="img-placeholder"/>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <div className="item-wrapper">
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
                                            <div>
                                                <h6 className="item-price">$339.99</h6>
                                            </div>
                                        </div>
                                        <h6 className="item-name">
                                            <a className="text-body" href="">Apple Watch
                                                Series 5</a>
                                            <span className="card-text item-company">By <a href=""
                                                                                           className="company-name">Apple</a></span>
                                        </h6>
                                        <p className="card-text item-description">
                                            On Retina display that never sleeps, so it’s easy to see the time and other
                                            important information, without raising or tapping the display. New location
                                            features, from a built-in compass to current elevation,
                                            help users better navigate their day, while international emergency calling1
                                            allows customers to call emergency services directly from Apple Watch in
                                            over 150 countries, even without iPhone nearby. Apple
                                            Watch Series 5 is available in a wider range of materials, including
                                            aluminium, stainless steel, ceramic and an all-new titanium.
                                        </p>
                                    </div>
                                    <div className="item-options text-center">
                                        <div className="item-wrapper">
                                            <div className="item-cost">
                                                <h4 className="item-price">$339.99</h4>
                                            </div>
                                        </div>
                                        <a href="" className="btn btn-light btn-wishlist">
                                            <i data-feather="heart"> </i>
                                            <span>Wishlist</span>
                                        </a>
                                        <a href="" className="btn btn-primary btn-cart">
                                            <i data-feather="shopping-cart"> </i>
                                            <span className="add-to-cart">Add to cart</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card ecommerce-card">
                                    <div className="item-img text-center">
                                        <a href="">
                                            <img className="img-fluid card-img-top"
                                                 src="/app-assets/images/pages/eCommerce/2.png"
                                                 alt="img-placeholder"/>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <div className="item-wrapper">
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
                                            <div>
                                                <h6 className="item-price">$669.99</h6>
                                            </div>
                                        </div>
                                        <h6 className="item-name">
                                            <a className="text-body" href="">Apple iPhone 11
                                                (64GB, Black)</a>
                                            <span className="card-text item-company">By <a href=""
                                                                                           className="company-name">Apple</a></span>
                                        </h6>
                                        <p className="card-text item-description">
                                            The Apple iPhone 11 is a great smartphone, which was loaded with a lot of
                                            quality features. It comes with a waterproof and dustproof body which is the
                                            key attraction of the device. The excellent set of
                                            cameras offer excellent images as well as capable of recording crisp videos.
                                            However, expandable storage and a fingerprint scanner would have made it a
                                            perfect option to go for around this price range.
                                        </p>
                                    </div>
                                    <div className="item-options text-center">
                                        <div className="item-wrapper">
                                            <div className="item-cost">
                                                <h4 className="item-price">$699.99</h4>
                                            </div>
                                        </div>
                                        <a href="" className="btn btn-light btn-wishlist">
                                            <i data-feather="heart" className="text-danger"> </i>
                                            <span>Wishlist</span>
                                        </a>
                                        <a href="" className="btn btn-primary btn-cart">
                                            <i data-feather="shopping-cart"> </i>
                                            <span className="add-to-cart">Add to cart</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card ecommerce-card">
                                    <div className="item-img text-center">
                                        <a href=""><img className="img-fluid card-img-top"
                                                                                  src="/app-assets/images/pages/eCommerce/3.png"
                                                                                  alt="img-placeholder"/></a>
                                    </div>
                                    <div className="card-body">
                                        <div className="item-wrapper">
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
                                            <div>
                                                <div className="item-cost">
                                                    <h6 className="item-price">$999.99</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="item-name">
                                            <a className="text-body" href="">Apple iMac
                                                27-inch</a>
                                            <span className="card-text item-company">By <a href=""
                                                                                           className="company-name">Apple</a></span>
                                        </h6>
                                        <p className="card-text item-description">
                                            The all-in-one for all. If you can dream it, you can do it on iMac. It’s
                                            beautifully & incredibly intuitive and packed with tools that let you take
                                            any idea to the next level. And the new 27-inch model
                                            elevates the experience in way, with faster processors and graphics,
                                            expanded memory and storage, enhanced audio and video capabilities, and an
                                            even more stunning Retina 5K display. It’s the desktop that does
                                            it all — better and faster than ever.
                                        </p>
                                    </div>
                                    <div className="item-options text-center">
                                        <div className="item-wrapper">
                                            <div className="item-cost">
                                                <h4 className="item-price">$999.99</h4>
                                                <p className="card-text shipping"><span
                                                    className="badge badge-pill badge-light-success">Free Shipping</span>
                                                </p>
                                            </div>
                                        </div>
                                        <a href="" className="btn btn-light btn-wishlist">
                                            <i data-feather="heart"> </i>
                                            <span>Wishlist</span>
                                        </a>
                                        <a href="" className="btn btn-primary btn-cart">
                                            <i data-feather="shopping-cart"> </i>
                                            <span className="add-to-cart">Add to cart</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card ecommerce-card">
                                    <div className="item-img text-center">
                                        <a href=""> <img className="img-fluid card-img-top"
                                                                                   src="/app-assets/images/pages/eCommerce/4.png"
                                                                                   alt="img-placeholder"/></a>
                                    </div>
                                    <div className="card-body">
                                        <div className="item-wrapper">
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
                                            <div className="item-cost">
                                                <h6 className="item-price">$49.99</h6>
                                            </div>
                                        </div>
                                        <h6 className="item-name">
                                            <a className="text-body" href="">OneOdio A71 Wired
                                                Headphones</a>
                                            <span className="card-text item-company">By <a href=""
                                                                                           className="company-name">OneOdio</a></span>
                                        </h6>
                                        <p className="card-text item-description">
                                            Omnidirectional detachable boom mic upgrades the headphones into a
                                            professional headset for gaming, business, podcasting and taking calls on
                                            the go. Better pick up your voice. Control most electric devices
                                            through voice activation, or schedule a ride with Uber and order a pizza.
                                            OneOdio A71 Wired Headphones voice-controlled device turns any home into a
                                            smart device on a smartphone or tablet.
                                        </p>
                                    </div>
                                    <div className="item-options text-center">
                                        <div className="item-wrapper">
                                            <div className="item-cost">
                                                <h4 className="item-price">$49.99</h4>
                                            </div>
                                        </div>
                                        <a href="" className="btn btn-light btn-wishlist">
                                            <i data-feather="heart"> </i>
                                            <span>Wishlist</span>
                                        </a>
                                        <a href="" className="btn btn-primary btn-cart">
                                            <i data-feather="shopping-cart"> </i>
                                            <span className="add-to-cart">Add to cart</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card ecommerce-card">
                                    <div className="item-img text-center">
                                        <a href="">
                                            <img className="img-fluid card-img-top"
                                                 src="/app-assets/images/pages/eCommerce/5.png"
                                                 alt="img-placeholder"/>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <div className="item-wrapper">
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
                                            <div className="item-cost">
                                                <h6 className="item-price">$999.99</h6>
                                            </div>
                                        </div>
                                        <h6 className="item-name">
                                            <a className="text-body" href="">
                                                Apple - MacBook Air® (Latest Model) - 13.3" Display - Silver
                                            </a>
                                            <span className="card-text item-company">By <a href=""
                                                                                           className="company-name">Apple</a></span>
                                        </h6>
                                        <p className="card-text item-description">
                                            MacBook Air is a thin, lightweight laptop from Apple. MacBook Air features
                                            up to 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2,
                                            great built-in apps, and all-day battery life.1 Its
                                            thin, light, and durable enough to take everywhere you go-and powerful
                                            enough to do everything once you get there, better.
                                        </p>
                                    </div>
                                    <div className="item-options text-center">
                                        <div className="item-wrapper">
                                            <div className="item-cost">
                                                <h4 className="item-price">$999.99</h4>
                                            </div>
                                        </div>
                                        <a href="" className="btn btn-light btn-wishlist">
                                            <i data-feather="heart" className="text-danger"> </i>
                                            <span>Wishlist</span>
                                        </a>
                                        <a href="" className="btn btn-primary btn-cart">
                                            <i data-feather="shopping-cart"> </i>
                                            <span className="add-to-cart">Add to cart</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card ecommerce-card">
                                    <div className="item-img text-center">
                                        <a href="">
                                            <img className="img-fluid card-img-top"
                                                 src="/app-assets/images/pages/eCommerce/6.png"
                                                 alt="img-placeholder"/>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <div className="item-wrapper">
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
                                            <div className="item-cost">
                                                <h6 className="item-price">$429.99</h6>
                                            </div>
                                        </div>
                                        <h6 className="item-name">
                                            <a className="text-body" href=""> Switch Pro
                                                Controller </a>
                                            <span className="card-text item-company">By <a href=""
                                                                                           className="company-name">Sharp</a></span>
                                        </h6>
                                        <p className="card-text item-description">
                                            The Nintendo Switch Pro Controller is one of the priciest "baseline"
                                            controllers in the current console generation, but it's also sturdy, feels
                                            good to play with, has an excellent direction pad, and features
                                            impressive motion sensors and vibration systems. On top of all of that, it
                                            uses Bluetooth, so you don't need an adapter to use it with your PC.
                                        </p>
                                    </div>
                                    <div className="item-options text-center">
                                        <div className="item-wrapper">
                                            <div className="item-cost">
                                                <h4 className="item-price">$429.99</h4>
                                                <p className="card-text shipping"><span
                                                    className="badge badge-pill badge-light-success">Free Shipping</span>
                                                </p>
                                            </div>
                                        </div>
                                        <a href="" className="btn btn-light btn-wishlist">
                                            <i data-feather="heart"> </i>
                                            <span>Wishlist</span>
                                        </a>
                                        <a href="" className="btn btn-primary btn-cart">
                                            <i data-feather="shopping-cart"> </i>
                                            <span className="add-to-cart">Add to cart</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card ecommerce-card">
                                    <div className="item-img text-center">
                                        <a href="">
                                            <img className="img-fluid card-img-top"
                                                 src="/app-assets/images/pages/eCommerce/7.png"
                                                 alt="img-placeholder"/>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <div className="item-wrapper">
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
                                            <div className="item-cost">
                                                <h6 className="item-price">$129.29</h6>
                                            </div>
                                        </div>
                                        <h6 className="item-name">
                                            <a className="text-body" href=""> Google - Google
                                                Home - White/Slate fabric </a>
                                            <span className="card-text item-company">By <a href=""
                                                                                           className="company-name">Google</a></span>
                                        </h6>
                                        <p className="card-text item-description">
                                            Simplify your everyday life with the Google Home, a voice-activated speaker
                                            powered by the Google Assistant. Use voice commands to enjoy music, get
                                            answers from Google and manage everyday tasks. Google Home
                                            is compatible with Android and iOS operating systems, and can control
                                            compatible smart devices such as Chromecast or Nest.
                                        </p>
                                    </div>
                                    <div className="item-options text-center">
                                        <div className="item-wrapper">
                                            <div className="item-cost">
                                                <h4 className="item-price">$129.29</h4>
                                                <p className="card-text shipping">
                                                    <span
                                                        className="badge badge-pill badge-light-success">Free Shipping</span>
                                                </p>
                                            </div>
                                        </div>
                                        <a href="" className="btn btn-light btn-wishlist">
                                            <i data-feather="heart"> </i>
                                            <span>Wishlist</span>
                                        </a>
                                        <a href="" className="btn btn-primary btn-cart">
                                            <i data-feather="shopping-cart"> </i>
                                            <span className="add-to-cart">Add to cart</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card ecommerce-card">
                                    <div className="item-img text-center">
                                        <a href="">
                                            <img className="img-fluid card-img-top"
                                                 src="/app-assets/images/pages/eCommerce/8.png"
                                                 alt="img-placeholder"/>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <div className="item-wrapper">
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
                                            <div className="item-cost">
                                                <h6 className="item-price">$7999.99</h6>
                                            </div>
                                        </div>
                                        <h6 className="item-name">
                                            <a className="text-body" href=""> Sony 4K Ultra HD
                                                LED TV </a>
                                            <span className="card-text item-company">By <a href=""
                                                                                           className="company-name">Apple</a></span>
                                        </h6>
                                        <p className="card-text item-description">
                                            Sony 4K Ultra HD LED TV has 4K HDR Support. The TV provides clear visuals
                                            and provides distinct sound quality and an immersive experience. This TV has
                                            Yes HDMI ports & Yes USB ports. Connectivity options
                                            included are HDMI. You can connect various gadgets such as your laptop using
                                            the HDMI port. The TV comes with a 1 Year warranty.
                                        </p>
                                    </div>
                                    <div className="item-options text-center">
                                        <div className="item-wrapper">
                                            <div className="item-cost">
                                                <h4 className="item-price">$29.99</h4>
                                            </div>
                                        </div>
                                        <a href="" className="btn btn-light btn-wishlist">
                                            <i data-feather="heart"> </i>
                                            <span>Wishlist</span>
                                        </a>
                                        <a href="" className="btn btn-primary btn-cart">
                                            <i data-feather="shopping-cart"> </i>
                                            <span className="add-to-cart">Add to cart</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card ecommerce-card">
                                    <div className="item-img text-center">
                                        <a href="">
                                            <img className="img-fluid card-img-top"
                                                 src="/app-assets/images/pages/eCommerce/9.png"
                                                 alt="img-placeholder"/>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <div className="item-wrapper">
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
                                            <div className="item-cost">
                                                <h6 className="item-price">$14.99</h6>
                                            </div>
                                        </div>
                                        <h6 className="item-name">
                                            <a className="text-body" href=""> OnePlus 7
                                                Pro </a>
                                            <span className="card-text item-company">By <a href=""
                                                                                           className="company-name">Philips</a></span>
                                        </h6>
                                        <p className="card-text item-description">
                                            The OnePlus 7 Pro features a brand new design, with a glass back and front
                                            and curved sides. The phone feels very premium but’s it’s also very heavy.
                                            The Nebula Blue variant looks slick but it’s quite
                                            slippery, which makes single-handed use a real challenge. It has a massive
                                            6.67-inch ‘Fluid AMOLED’ display with a QHD+ resolution, 90Hz refresh rate
                                            and support for HDR 10+ content. The display produces
                                            vivid colours, deep blacks and has good viewing angles.
                                        </p>
                                    </div>
                                    <div className="item-options text-center">
                                        <div className="item-wrapper">
                                            <div className="item-cost">
                                                <h4 className="item-price">$14.99</h4>
                                            </div>
                                        </div>
                                        <a href="" className="btn btn-light btn-wishlist">
                                            <i data-feather="heart"> </i>
                                            <span>Wishlist</span>
                                        </a>
                                        <a href="" className="btn btn-primary btn-cart">
                                            <i data-feather="shopping-cart"> </i>
                                            <span className="add-to-cart">Add to cart</span>
                                        </a>
                                    </div>
                                </div>
                            </section>
                            {/* E-commerce Products Ends */}

                            {/* E-commerce Pagination Starts */}
                            <section id="ecommerce-pagination">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center mt-2">
                                                <li className="page-item prev-item"><a className="page-link"
                                                                                       href=""> </a>
                                                </li>
                                                <li className="page-item active"><a className="page-link"
                                                                                    href="">1</a>
                                                </li>
                                                <li className="page-item"><a className="page-link"
                                                                             href="">2</a></li>
                                                <li className="page-item"><a className="page-link"
                                                                             href="">3</a></li>
                                                <li className="page-item" aria-current="page"><a className="page-link"
                                                                                                 href="">4</a>
                                                </li>
                                                <li className="page-item"><a className="page-link"
                                                                             href="">5</a></li>
                                                <li className="page-item"><a className="page-link"
                                                                             href="">6</a></li>
                                                <li className="page-item"><a className="page-link"
                                                                             href="">7</a></li>
                                                <li className="page-item next-item"><a className="page-link"
                                                                                       href=""> </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </section>
                            {/* E-commerce Pagination Ends */}

                        </div>
                </div>
            </div>

            {/* END: Content */}
        </>
    )
}
