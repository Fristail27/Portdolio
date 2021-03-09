import React from 'react';
import s from './MyOpen.module.css';
import styleContainer from "../../common/styles/Container.module.css"
import Photo from "../../img/photo.png"

const Slide = require('react-reveal/Slide');

const MyOpen = () => {
    return (
        <div id={"about"} className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.photo}>
                    <Slide left>
                        <img src={Photo} alt="photo"/>
                    </Slide>
                </div>
                <div className={s.text}>

                    <h1>
                        <Slide top>
                            I'm Alexey Ryzhov,
                            <br/>
                            Frontend-developer
                        </Slide>
                    </h1>
                    <p>
                        <Slide bottom>
                            Front-end developer with experience
                            creating SPA using technologies such as: React, TS/JS, Redux, HTML,
                            CSS.My free time is dedicated to Codewars and becoming familiar with NodeJS and Express.js.
                            In
                            the future I see myself as a Full Stack Developer. Ready to consider project work and
                            full-time
                            employment.
                        </Slide></p>

                </div>

            </div>
        </div>
    );
}

export default MyOpen;