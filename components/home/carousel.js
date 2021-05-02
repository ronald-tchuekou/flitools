import React from 'react';

export default function Carousel ({lang}){
    const img_style = {width: '100%', height: '300px'};
    return (
        <div id="carousel-example-caption" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-caption" data-slide-to="0" className="active"> </li>
                <li data-target="#carousel-example-caption" data-slide-to="1"> </li>
                <li data-target="#carousel-example-caption" data-slide-to="2"> </li>
                <li data-target="#carousel-example-caption" data-slide-to="3"> </li>
                <li data-target="#carousel-example-caption" data-slide-to="4"> </li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img className="img-fluid" style={img_style} src="/app-assets/images/slider/09.jpg" alt="First slide"/>
                    <div className="carousel-caption">
                        <h3 className="text-white">First Slide Label</h3>
                        <p className="text-white">
                            Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I
                            love donut sweet
                            chocolate. Tart chocolate marshmallow.Tart carrot cake muffin.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid" style={img_style} src="/app-assets/images/slider/04.jpg"
                         alt="Second slide"/>
                    <div className="carousel-caption">
                        <h3 className="text-white">Second Slide Label</h3>
                        <p className="text-white">
                            Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly
                            caramels jujubes
                            chocolate cake gummies. Cupcake cake I love cake danish carrot cake.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid" style={img_style} src="/app-assets/images/slider/08.jpg"
                         alt="Second slide"/>
                    <div className="carousel-caption">
                        <h3 className="text-white">Second Slide Label</h3>
                        <p className="text-white">
                            Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly
                            caramels jujubes
                            chocolate cake gummies. Cupcake cake I love cake danish carrot cake.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid" style={img_style} src="/app-assets/images/slider/10.jpg"
                         alt="Third slide"/>
                    <div className="carousel-caption">
                        <h3 className="text-white">Third Slide Label</h3>
                        <p className="text-white">
                            Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate
                            cotton candy pastry
                            muffin. Marshmallow cake powder icing.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid" style={img_style} src="/app-assets/images/banner/banner-12.jpg"
                         alt="Third slide"/>
                    <div className="carousel-caption">
                        <h3 className="text-white">Montre réseau</h3>
                        <p className="text-white">
                            Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate
                            cotton candy pastry
                            muffin. Marshmallow cake powder icing.
                        </p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel-example-caption" role="button"
               data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-example-caption" role="button"
               data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}
