import React, {useContext} from 'react';
import s from './Main.module.scss';
import SocialIcons from "../../common/socialIcons/SocialIcons";
import Button from '../../common/button/Button';
//@ts-ignore
import CV from "../../assets/cv/AlexeyRyzhovCV.pdf"
//@ts-ignore
import ReactTypingEffect from 'react-typing-effect'
import {AppContext} from "../../App";
import {textContent} from "../../constants/textContent";

const Flip = require('react-reveal/Flip');

function Main() {
    const {lang} = useContext(AppContext)

    return (

        <div className={s.mainBlock}>

            <div className={s.text}>
                <ReactTypingEffect
                    text={[textContent[lang].main.proff]}
                />
            </div>
            <Flip top>
                <SocialIcons/>
                <a href={CV} download><Button name={textContent[lang].main.download}/></a>
            </Flip>
        </div>

    )
}

export default Main;
