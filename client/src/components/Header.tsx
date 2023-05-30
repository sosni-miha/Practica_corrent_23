import React from 'react';
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <div className="header">
            <SearchBar/>
            <span>Добро Пожаловать в Макдоналдс</span>
            <button>Добавить Бургер</button>
        </div>
    );
};

export default Header;