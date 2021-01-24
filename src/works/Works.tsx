import React from "react";
import s from "./Works.module.css"
import containerStyle from "./../common/styles/Container.module.css"
import Work from "./work/Work";

const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={containerStyle.container}>
                <div className={s.field}>
                    <div className={s.titleBlock}>
                        <h2>Мои работы</h2>
                    </div>
                    <div className={s.works}>
                        <Work name="Проект 1" description={"Описание проекта 1"}/>
                        <Work name="Проект 2" description={"Описание проекта 2"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works