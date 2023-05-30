import React from 'react';
import searchImg from "../assets/images/search.svg"

const SearchBar = () => {
    return (
        <div className="search">
            <img src={searchImg}/>
            <input/>
        </div>
    );
};

export default SearchBar;