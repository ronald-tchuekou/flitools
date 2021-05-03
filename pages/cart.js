import React, {useEffect, useState} from 'react';
import AppLayout from "./app_layout";
import {Cart} from "../components";
import ENV from "../constants/app_env";

const title = "Cart";

export default function () {

    const [lang, setLang] = useState('fr');

    useEffect(() => {
        let local_lang = localStorage.getItem(ENV.LANG);
        setLang((local_lang === null || local_lang === undefined) ? 'fr' : local_lang);
    }, []);

    return (
        <AppLayout lang={lang} title={title}>
            <Cart lang={lang}/>
        </AppLayout>
    )
}
