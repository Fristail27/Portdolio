import React from "react";
import s from "./Footer.module.css"
import containerStyle from "../../common/styles/Container.module.css"
import SocialIcons from "../../common/socialIcons/SocialIcons";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${containerStyle.container} ${s.footerContainer}`}>
                <div className={s.field}>
                    <h2>Alexey Ryzhov</h2>
                    <span>2021 © All  rights reserved</span>
                    <SocialIcons/>
                </div>
            </div>
        </div>
    )
}

export default Footer