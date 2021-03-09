import React from "react";
import s from "./Works.module.css"
import containerStyle from "../../common/styles/Container.module.css"
import Work from "./work/Work";
import Counter from "../../img/works/Screenshot_1.jpg"
import TodolistImg from "../../img/works/TodolistImg.jpg"
const Fade = require('react-reveal/Fade');

const Works = () => {
    return (
        <div id={"works"} className={s.worksBlock}>
            <div className={containerStyle.container}>
                <div className={s.field}>
                    <div className={s.titleBlock}>
                        <h2>My works</h2>
                    </div>
                    <div className={s.works}>
                        <Fade left>
                        <Work img={Counter}
                              name="Counter"
                              description={"React, Redux, JavaScript, TypeScript, HTML/CSS, functional components, hooks, Material UI"}
                              gitHubLink={'https://github.com/Fristail27/Counter/tree/counter-redux'}
                              demoLink={'https://fristail27.github.io/Counter'}/>
                        <Work name="Todolist"
                              img={TodolistImg}
                              description={"React, Redux, JavaScript, TypeScript, RestAPI, HTML/CSS, functional components, hooks, Axios, Material UI, Redux-thunk, Formik,"}
                              gitHubLink={'https://github.com/Fristail27/Todolist'}
                              demoLink={'https://fristail27.github.io/Todolist/'}/>
                        <Work name="Проект 2" description={"Описание проекта 2"}/>
                            </Fade>
                    </div>
                    <div className={s.works}>
                        <Fade right>
                        <Work name="Проект 1" description={"Описание проекта 1"}/>
                        <Work name="Проект 1" description={"Описание проекта 1"}/>
                        <Work name="Проект 2" description={"Описание проекта 2"}/>
                            </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works