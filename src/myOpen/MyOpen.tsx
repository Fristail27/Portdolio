import React from 'react';
import s from './MyOpen.module.css';
import styleContainer from "./../common/styles/Container.module.css"
import Photo from "../img/photo.png"

const MyOpen = () => {
    return (
        <div id={"about"} className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.photo}>
                    <img src={Photo} alt="photo"/>
                </div>
                <div className={s.text}>
                    <h1>
                        I'm Alexey Ryzhov,
                        <br/>
                        Frontend-developer
                    </h1>
                    <p>I have rich experience in web site design & building and customization. Also I am good at html,
                        css, javascript, wordpress, php, jquery, bootstrap. I love to talk with you about our unique
                        approach. Feel free to contact me writing an email with your project idea.</p>
                </div>

            </div>
        </div>
    );
}

export default MyOpen;