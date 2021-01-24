import React from "react";
import s from "./Footer.module.css"
import containerStyle from "./../common/styles/Container.module.css"

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${containerStyle.container} ${s.footerContainer}`}>
                <div className={s.field}>
                    <h2>Рыжов Алексей</h2>
                    <div className={s.quares}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>2021 © все права защищены</p>
                </div>
            </div>
        </div>
    )
}

export default Footer