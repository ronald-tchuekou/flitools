import React, {useEffect} from 'react';
import {AppHead, Footer, Header, Scripts} from "../components";
import {getElt} from "../src/libs/utils";

export default function AppLayout ({lang, title, children}) {

    useEffect(() => {

        let body = getElt('body');
        body.className = "vertical-layout vertical-menu-modern navbar-floating footer-static";
        body.setAttribute('data-menu','vertical-menu-modern');
        body.setAttribute('data-col', '1-column');

    }, []);

    return (
        <>
            <AppHead title={title}/>
            <Header lang={lang}/>
            {children}
            <Footer lang={lang}/>
            <Scripts/>
        </>
    );
}
