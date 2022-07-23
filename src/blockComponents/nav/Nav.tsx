import React, {useContext} from 'react';
import s from './Nav.module.scss';
import {Link} from "react-scroll";
import {AppContext} from "../../App";
import {textContent} from "../../constants/textContent";

function Nav() {
    const {lang} = useContext(AppContext)

    return (
        <div className={s.nav}>
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >{textContent[lang].nav.about}</Link>
            <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >{textContent[lang].nav.skills}</Link>
            <Link
                to="works"
                spy={true}
                smooth={true}
                offset={-80}
                duration= {500}
            >{textContent[lang].nav.works}</Link>
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >{textContent[lang].nav.contact}</Link>
        </div>
    );
}

export default Nav;
