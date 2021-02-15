import React, {useState} from "react";
import s from "./Work.module.css"
import Button from "../../common/button/Button";

type WorkPropsType = {
    name: string;
    description: string;
    img?: string;
    gitHubLink?: string;
    demoLink?:string
}

const Work: React.FC<WorkPropsType> = (props) => {

    let [blockStatus, setBlockStatus] = useState<boolean>(false)

    return (
        <div
            onMouseLeave={() => {
                setTimeout(()=> setBlockStatus(false), 500)
            }}
            onMouseOver={() => setBlockStatus(true)}
            className={s.workBlock}>
            <div className={s.captureBlock}>
                <img src={props.img} alt=""/>
            </div>
            {blockStatus
                ? <div className={s.onHover}>
                    <h2>{props.name}</h2>
                    <div className={s.line}/>
                    <span>{props.description}</span>
                    <div className={s.line}/>
                    <div className={s.buttons}>
                        <Button onClick={() =>  window.open(props.gitHubLink as string)} name={"GitHub"}/>
                        <Button onClick={() =>  window.open(props.demoLink as string)} name={"Demo"}/>
                    </div>
                </div>
                : ""
                    }
        </div>
    )
}

export default Work