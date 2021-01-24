import React from 'react';
import s from './Skills.module.css';
import styleContainer from "./../common/styles/Container.module.css"
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title="JS" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."/>
                    <Skill title="CSS" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,t ut labore et dolore magna aliqua Ut enim..."/>
                    <Skill title="REACT" description="Loremed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."/>
                </div>
            </div>
        </div>
    );
}

export default Skills;