import React, {useEffect, useState} from 'react';
import {AppHead, Footer, Header, Home, Scripts} from "../components";
import {getElt} from "../src/libs/utils";
import AppLayout from "./app_layout";
import ENV from "../constants/app_env";

export default function () {

    const [lang, setLang] = useState('fr');

    useEffect(() => {
        let local_lang = localStorage.getItem(ENV.LANG);
        setLang((local_lang === null || local_lang === undefined) ? 'fr' : local_lang);
    }, []);

    return (
        <AppLayout lang={lang} title={'Flitools'}>
            <Home lang={lang}/>
        </AppLayout>
    );
}
