import React, {useEffect, useState} from 'react';
import Language_manager from "./language_manager";
import Search_manager from "./search_manager";
import Cart_manager from "./cart_manager";
import User_manager from "./user_manager";

export default function ({lang, theme_i}){
    const[searching, setSearching] = useState(false);
    const onSearch = (value) => {
        // TODO
        setSearching(value !== '');
    };
    return (
        <>
            {/* BEGIN: Header*/}
            <nav
                className={`navbar header-navbar navbar navbar-shadow align-items-center navbar-light navbar-expand fixed-top`}>
                {/*className="header-navbar navbar navbar-sticky navbar-expand-lg align-items-center navbar-light">*/}
                <div className="navbar-container d-flex content">
                    <ul className="nav navbar-nav align-items-center ml-auto">

                        <Language_manager lang={lang}/>

                        {/*To manage the theme*/}
                        <li className="nav-item d-lg-block">
                            <a className="nav-link nav-link-style">
                                <i className="ficon" data-feather={theme_i}> </i>
                            </a>
                        </li>

                        <Search_manager onSearch={(value) => onSearch(value)} lang={lang}/>

                        <Cart_manager lang={lang}/>

                        <User_manager lang={lang}/>
                    </ul>
                </div>
            </nav>

            {searching ? (<>
                {/*<ul className="main-search-list-defaultlist d-none">*/}
                {/*    <li className="d-flex align-items-center">*/}
                {/*        <a href="">*/}
                {/*            <h6 className="section-label mt-75 mb-0">Files</h6>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li className="auto-suggestion">*/}
                {/*        <a className="d-flex align-items-center justify-content-between w-100" href="#">*/}
                {/*            <div className="d-flex">*/}
                {/*                <div className="mr-75"><img src="app-assets/images/icons/xls.png" alt="png"*/}
                {/*                                            height="32"/></div>*/}
                {/*                <div className="search-data">*/}
                {/*                    <p className="search-data-title mb-0">Two new item submitted</p>*/}
                {/*                    <small className="text-muted">Marketing Manager</small>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <small className="search-data-size mr-50 text-muted">&apos;17kb</small>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
                {/*<ul className="main-search-list-default list-other-list d-none">*/}
                {/*    <li className="auto-suggestion justify-content-between">*/}
                {/*        <a className="d-flex align-items-center justify-content-between w-100 py-50">*/}
                {/*            <div className="d-flex justify-content-start">*/}
                {/*                <span className="mr-75" data-feather="alert-circle"> </span>*/}
                {/*                <span>No results found.</span>*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </>): <></>}

            {/* END: Header*/}

        </>
    )
}
