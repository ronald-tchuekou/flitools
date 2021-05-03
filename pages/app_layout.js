import React, {useEffect, useState} from 'react';
import {AppHead, Footer, Header, Scripts} from "../components";
import {getElt} from "../src/libs/utils";
import ENV from "../constants/app_env";

export default function AppLayout ({lang, title, children}) {
    const [theme_i, setTheme_i] = useState('moon');
    useEffect(() => {
        let body = getElt('body');
        body.className = "vertical-layout vertical-menu-modern navbar-floating footer-static";
        body.setAttribute('data-menu','vertical-menu-modern');
        body.setAttribute('data-col', '1-column');
        let current_skin = localStorage.getItem(ENV.THEME.current_skin);
        setTheme_i(current_skin === 'dark-layout' ? 'sun' : 'moon');
    }, []);

    return (
        <>
            <AppHead title={title}/>
            <Header theme_i={theme_i} lang={lang}/>
            {children}
            <Footer lang={lang}/>
            <Scripts/>
        </>
    );
}
