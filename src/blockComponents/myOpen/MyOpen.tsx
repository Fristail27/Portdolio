import React, {useContext} from 'react';
import s from './MyOpen.module.css';
import styleContainer from "../../common/styles/Container.module.css"
import Photo from "../../assets/photo.png"
import {AppContext} from "../../App";
import {textContent} from "../../constants/textContent";

const Slide = require('react-reveal/Slide');

const MyOpen = () => {
    const {lang} = useContext(AppContext)
    return (
        <div id={"about"} className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.photo}>
                    <Slide left>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={Photo} alt="photo"/>
                    </Slide>
                </div>
                <div className={s.text}>

                    <h1>
                        <Slide top>
                            {textContent[lang].myOpen.myName}
                            <br/>
                            {textContent[lang].main.proff}
                        </Slide>
                    </h1>
                    <p><Slide bottom>{textContent[lang].myOpen.myDescription}</Slide></p>
                </div>

            </div>
        </div>
    );
}

export default MyOpen;
