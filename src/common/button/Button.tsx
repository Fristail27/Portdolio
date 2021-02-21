import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    name:string;
    onClick?: ()=> void;
    type?: string
    disabled?:boolean;
}

const Button:React.FC<ButtonPropsType> = (props) => {

    return (
        <button disabled={props.disabled} onClick={props.onClick} className={s.button}>{props.name}</button>
    )
};

export default Button