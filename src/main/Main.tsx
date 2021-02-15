import React from 'react';
import s from './Main.module.scss';
import SocialIcons from "../common/socialIcons/SocialIcons";


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={s.text}>
                <span>Frontend-developer</span>
            </div>
            <SocialIcons/>
        </div>
    )
}

export default Main;