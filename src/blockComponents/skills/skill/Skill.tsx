import React from 'react';
import s from './Skill.module.css';

type SkillPropsType = {
    img: string
    title: string
    description: string
}

function Skill(props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img src={props.img} alt=""/>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Skill;