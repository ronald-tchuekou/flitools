import React, {useState} from 'react';

const Search_manager = ({lang, onSearch}) => {

    const [search, setSearch] = useState('');
    const placeholder = {
        fr: 'Faite une recherche de produit, categories, autres...',
        en: 'Make search of product, categories, others...'
    };

    const onSearchChange = (e) => {
        let val = e.target.value;
        setSearch(val);
        onSearch(val);
    };

    return (
        <li className="nav-item nav-search">
            <a className="nav-link nav-link-search"><i className="ficon" data-feather="search"> </i></a>
            <div className="search-input">
                <div className="search-input-icon"><i data-feather="search"> </i></div>
                <input
                    onChange={(e) => onSearchChange(e)}
                    className="form-control input"
                    type="text"
                    value={search}
                    placeholder={placeholder[lang]}
                    tabIndex="-1"
                    data-search="search"/>
                <div className="search-input-close"><i data-feather="x"> </i></div>
                <ul className="search-list search-list-main"> </ul>
            </div>
        </li>
    );
}

export default Search_manager;
