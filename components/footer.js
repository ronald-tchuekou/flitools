import React from 'react';

export default function ({lang}) {
    return (
        <>
            <footer className="footer footer-dark my-25">
                <div className="copyright text-center">&copy;Copyright 2021, powered by roncoder, all right reserved</div>
            </footer>
            <button className="btn btn-primary btn-icon scroll-top" type="button">
                <i data-feather="arrow-up"> </i>
            </button>
        </>

    );
}
