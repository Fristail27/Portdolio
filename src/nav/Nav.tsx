import React from 'react';
import s from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
    return (
        <div className={s.nav}>
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration= {500}
            >About</Link>
            <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={60}
                duration= {500}
            >Skills</Link>
            <Link
                to="works"
                spy={true}
                smooth={true}
                offset={60}
                duration= {500}
            >Works</Link>
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration= {500}
            >Contact</Link>
        </div>
    );
}

export default Nav;