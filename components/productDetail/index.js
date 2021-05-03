import React from 'react';
import Preview from "./preview";
import Features from "./features";
import Relates from "./relates";

export default function ({lang}) {
    return(
        <>
            {/* BEGIN: Content*/}
            <div className="app-content content ecommerce-application">
                <div className="content-wrapper">
                    <div className="content-body">
                        {/* app e-commerce details start */}
                        <section className="app-ecommerce-details">
                            <div className="card">

                                {/* Product Details starts */}
                                <Preview lang={lang}/>
                                {/* Product Details ends */}

                                {/* Item features starts */}
                                <Features lang={lang}/>
                                {/* Item features ends */}

                                {/* Related Products starts */}
                                <Relates lang={lang}/>
                                {/* Related Products ends */}

                            </div>
                        </section>
                        {/* app e-commerce details end */}
                    </div>
                </div>
            </div>
            {/* END: Content*/}

            <div className="sidenav-overlay"> </div>
            <div className="drag-target"> </div>

        </>
    )
}
