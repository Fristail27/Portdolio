import React from 'react';
import s from './Skills.module.css';
import styleContainer from "../../common/styles/Container.module.css"
import Skill from "./skill/Skill";
import rea from "../../img/skills/atom_88925.svg"
import JS from "../../img/skills/file_javascript_icon_161332.svg"
import UIIX
    from "../../img/skills/4124798-app-development-mobile-mobile-development-mobile-software-mobile-ui_113893.svg"
import TS from "../../img/skills/config_typescript_icon_132469.svg"
import HTML from "../../img/skills/file_html_icon_161333.svg"
import testing from "../../img/skills/dnahelixmagnifiersearchtesting_123083.svg"

function Skills() {
    return (
        <div id={"skills"} className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill img={rea} title="React"
                           description="I use the React library in my projects. With the React I use React-router-dom, React-redux, Material UI, Ant Design, Axios. Hooks, HOCs, Class Component, Functional Component,"/>
                    <Skill img={JS} title="Redux"
                           description="I use the Redux library in my projects. With the Redux I use React-Redux, Redux-thunk, Redux-form.FLUX principe. HOC connect and hooks useSelector/useDispatch"/>
                    <Skill img={UIIX} title="JavaScript"
                           description="ES6, SOLID, Async functions, REST API, OOP, Classes"/>
                </div>
                <div className={s.skills}>
                    <Skill img={TS} title="TypeScript"
                           description="Typescript, Generics"/>
                    <Skill img={HTML} title="HTML / CSS"
                           description="BEM, Semantic HTML, Responsive web design, SCSS, Bootstrap"/>
                    <Skill img={testing} title="Testing"
                           description="Test driven development, JEST, unit test, snapshot"/>
                </div>
            </div>
        </div>
    );
}

export default Skills;