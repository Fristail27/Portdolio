import React from "react";
import s from "./Freelance.module.css"
import containerStyle from "./../common/styles/Container.module.css"
import Button from "../common/button/Button";

const Freelance = () => {
    return (
        <div className={s.freestyleBlock}>
            <div className={containerStyle.container}>
                <div className={s.field}>
                    <h2>Рассматриваю варианты удаленной работы</h2>
                    <Button name={"Нанять меня"}/>
                </div>
            </div>
        </div>
    )
}

export default Freelance