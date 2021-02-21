import React from "react";
import s from "./Works.module.css"
import containerStyle from "../../common/styles/Container.module.css"
import Work from "./work/Work";
import Counter from "../../img/works/Screenshot_1.jpg"

const Works = () => {
    return (
        <div id={"works"} className={s.worksBlock}>
            <div className={containerStyle.container}>
                <div className={s.field}>
                    <div className={s.titleBlock}>
                        <h2>My works</h2>
                    </div>
                    <div className={s.works}>
                        <Work img={Counter}
                              name="Counter"
                              description={"React, Redux, JavaScript, RestAPI, HTML/CSS, functional and classes components, hooks, connect"}
                              gitHubLink={'https://github.com/Fristail27/Counter/tree/counter-redux'}
                              demoLink={'https://fristail27.github.io/Counter'}/>
                        <Work name="Проект 1" description={"Описание проекта 1"}/>
                        <Work name="Проект 2" description={"Описание проекта 2"}/>
                    </div>
                    <div className={s.works}>
                        <Work name="Проект 1" description={"Описание проекта 1"}/>
                        <Work name="Проект 1" description={"Описание проекта 1"}/>
                        <Work name="Проект 2" description={"Описание проекта 2"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works