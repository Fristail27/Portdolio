import React from 'react';
import s from './Skills.module.css';
import styleContainer from "./../common/styles/Container.module.css"
import Skill from "./skill/Skill";
import rea from "./../img/skills/atom_88925.svg"
import JS from "./../img/skills/file_javascript_icon_161332.svg"
import UIIX from "./../img/skills/4124798-app-development-mobile-mobile-development-mobile-software-mobile-ui_113893.svg"
import TS from "./../img/skills/config_typescript_icon_132469.svg"
import HTML from "./../img/skills/file_html_icon_161333.svg"
import testing from "./../img/skills/dnahelixmagnifiersearchtesting_123083.svg"

function Skills() {
    return (
        <div id={"skills"} className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill img={rea} title="React" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."/>
                    <Skill img={JS} title="JS" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,t ut labore et dolore magna aliqua Ut enim..."/>
                    <Skill img={UIIX} title="UI / UX Design" description="Loremed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."/>
                </div>
                <div className={s.skills}>
                    <Skill img={TS} title="TypeScript" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."/>
                    <Skill img={HTML} title="HTML / CSS" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,t ut labore et dolore magna aliqua Ut enim..."/>
                    <Skill img={testing} title="Testing" description="Loremed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."/>
                </div>
            </div>
        </div>
    );
}

export default Skills;