import React from 'react';
import s from './Main.module.scss';
import SocialIcons from "../../common/socialIcons/SocialIcons";
import Button from '../../common/button/Button';
//@ts-ignore
import CV from "./../../cv/AlexeyRyzhovCV.pdf"


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={s.text}>
                <span>Frontend-developer</span>
            </div>
            <SocialIcons/>
            <a href={CV} download><Button name="Download Resume"/></a>
        </div>
    )
}

export default Main;