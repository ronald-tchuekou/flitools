import React from 'react';

const Features = ({lang}) => {
    return (
        <div className="item-features">
            <div className="row text-center">
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <div className="w-75 mx-auto">
                        <i data-feather="award"> </i>
                        <h4 className="mt-2 mb-1">100% Original</h4>
                        <p className="card-text">Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <div className="w-75 mx-auto">
                        <i data-feather="clock"> </i>
                        <h4 className="mt-2 mb-1">10 Day Replacement</h4>
                        <p className="card-text">Marshmallow biscuit donut dragée fruitcake. Jujubes wafer cupcake.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <div className="w-75 mx-auto">
                        <i data-feather="shield"> </i>
                        <h4 className="mt-2 mb-1">1 Year Warranty</h4>
                        <p className="card-text">Cotton candy gingerbread cake I love sugar plum I love sweet croissant.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
