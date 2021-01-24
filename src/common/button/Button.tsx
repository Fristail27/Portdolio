import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
<<<<<<< HEAD
    name:string;
    onClick?: ()=> void
=======
    name:string
>>>>>>> 2280c26... portfolio/template
}

const Button:React.FC<ButtonPropsType> = (props) => {
    return (
<<<<<<< HEAD
        <button onClick={props.onClick} className={s.button}>{props.name}</button>
    )
};
=======
        <button className={s.button}>{props.name}</button>
    )
}
>>>>>>> 2280c26... portfolio/template

export default Button