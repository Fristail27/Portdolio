import React from "react";
import s from "./Work.module.css"
import Button from "../../common/button/Button";

type WorkPropsType = {
    name:string
    description:string
}

const Work:React.FC<WorkPropsType> = (props) => {
    return (
        <div className={s.workBlock}>
            <div className={s.captureBlock}>
                <div className={s.capture}>1</div>
                <div className={s.show}>
                    <Button name={"Смотреть"}/>
                </div>
            </div>
            <div className={s.textBlock}>
                <h3>{props.name}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default Work