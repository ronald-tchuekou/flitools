import React from 'react';
import Constants from "../../constants";
import ENV from "../../constants/app_env";

/**
 * Function to manage the application language.
 * @param {string} lang
 * @returns {JSX.Element}
 * @constructor
 */
const Language_manager = ({lang}) => {
    const changeLang = (_val) => {
        localStorage.setItem(ENV.LANG, _val);
        window.location.reload();
    };
    return(
        <li className="nav-item dropdown dropdown-language">
            <a className="nav-link dropdown-toggle" id="dropdown-flag" href=""
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className={`flag-icon flag-icon-${lang === 'fr' ? 'fr' : 'us'}`}> </i><span
                className="selected-language">{lang === 'fr' ? 'Français' : 'English'}</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-flag">
                {Constants.Languages.map((item, i) => {
                    return (
                        <a key={i} onClick={() => changeLang(item.value)} className="dropdown-item" data-language={item.value}><i
                            className={`flag-icon flag-icon-${item.type}`}> </i> {item.label[lang]}</a>
                    );
                })}
                {/*<a className="dropdown-item" href="" data-language="en"><i*/}
                {/*    className="flag-icon flag-icon-us"> </i> English</a>*/}
                {/*<a className="dropdown-item" href="" data-language="fr"><i*/}
                {/*    className="flag-icon flag-icon-fr"> </i> French</a>*/}
            </div>
        </li>
    );
}

export default Language_manager;
