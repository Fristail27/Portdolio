import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    name:string;
    onClick?: ()=> void;
    type?: string
}

const Button:React.FC<ButtonPropsType> = (props) => {
    return (
        <button onClick={props.onClick} className={s.button}>{props.name}</button>
    )
};

export default Button