import React from 'react';
import s from './Main.module.scss';
import SocialIcons from "../../common/socialIcons/SocialIcons";
import Button from '../../common/button/Button';
//@ts-ignore
import CV from "./../../cv/AlexeyRyzhovCV.pdf"
//@ts-ignore
import ReactTypingEffect from 'react-typing-effect'

const Flip = require('react-reveal/Flip');

function Main() {
    return (

        <div className={s.mainBlock}>

            <div className={s.text}>
                <ReactTypingEffect
                    text={["Frontend-developer"]}
                />
            </div>
            <Flip top>
                <SocialIcons/>
                <a href={CV} download><Button name="Download Resume"/></a>
            </Flip>
        </div>

    )
}

export default Main;