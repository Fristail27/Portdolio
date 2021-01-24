import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    name:string
}

const Button:React.FC<ButtonPropsType> = (props) => {
    return (
        <button className={s.button}>{props.name}</button>
    )
}

export default Button