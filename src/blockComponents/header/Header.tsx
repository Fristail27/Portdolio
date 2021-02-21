import React from 'react';
import s from './Header.module.scss';
import Nav from "../nav/Nav";

function Header() {
    return (
        <header className={s.header}>
            <Nav/>
        </header>
    );
}

export default Header;