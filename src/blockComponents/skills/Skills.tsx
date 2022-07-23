import React, {useContext} from 'react';
import s from './Skills.module.css';
import styleContainer from "../../common/styles/Container.module.css"
import rea from "../../assets/skills/atom_88925.svg"
import ux from "../../assets/skills/ux-circle-line-svgrepo-com.svg"
import JS from "../../assets/skills/file_javascript_icon_161332.svg"
import mobX from "../../assets/skills/mobx.svg"
import forms from "../../assets/skills/computer-technology-working-svgrepo-com.svg"
import crypto from "../../assets/skills/certificate-check-svgrepo-com.svg"
import enviroments from "../../assets/skills/settings-svgrepo-com.svg"
import ReduxIcon
    from "../../assets/skills/redux_icon_132038.svg"
import TS from "../../assets/skills/config_typescript_icon_132469.svg"
import HTML from "../../assets/skills/file_html_icon_161333.svg"
import testing from "../../assets/skills/dnahelixmagnifiersearchtesting_123083.svg"
import {textContent} from "../../constants/textContent";
import {AppContext} from "../../App";
import {SkillComponent} from "./SkillComponent";

const Fade = require('react-reveal/Fade');


function Skills() {
    const {lang} = useContext(AppContext)

    return (
        <div id={"skills"} className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>{textContent[lang].skills.title}</h2>
                <div className={s.skills}>
                    <Fade right>
                        <SkillComponent
                            img={TS}
                            title="TypeScript"
                            description={textContent[lang].skills.mainDev}
                            additionalTitle={{
                                title: "JavaScript",
                                img: JS
                            }}
                        />
                        <SkillComponent img={HTML} title="HTML / CSS"
                                        description={textContent[lang].skills.styles}/>
                        <SkillComponent img={rea} title="React / Next.js"
                               description={textContent[lang].skills.react}/>
                        <SkillComponent
                            img={ReduxIcon}
                            title="Redux / RTK"
                            description={textContent[lang].skills.globalState}
                            additionalTitle={{
                                title: "MobX",
                                img: mobX
                            }}
                        />
                        <SkillComponent
                            img={forms}
                            title="React Hook Forms / Formik"
                            description={textContent[lang].skills.forms}
                        />
                        <SkillComponent
                            img={ux}
                            title="UI Libraries"
                            description={textContent[lang].skills.uiLibraries}
                        />
                        <SkillComponent img={testing} title="Testing"
                                        description={textContent[lang].skills.testing}/>
                        <SkillComponent img={crypto} title="Digital signature"
                                        description={textContent[lang].skills.crypto}/>
                        <SkillComponent img={enviroments} title="Environments"
                                        description={textContent[lang].skills.environments}/>

                    </Fade>
                </div>
            </div>
        </div>

    );
}

export default Skills;
