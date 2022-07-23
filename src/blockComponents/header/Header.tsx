import React from 'react';
import s from './Header.module.scss';
import Nav from "../nav/Nav";
import {Langs} from "../Langs";

function Header() {
    return (
        <header className={s.header}>
            <Langs/>
            <Nav/>
        </header>
    );
}

export default Header;
