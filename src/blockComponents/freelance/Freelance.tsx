import React from "react";
import s from "./Freelance.module.scss"
import containerStyle from "../../common/styles/Container.module.css"
import {Link} from "react-scroll";

const Freelance = () => {
    return (
        <div className={s.freestyleBlock}>
            <div className={containerStyle.container}>
                <div className={s.field}>
                    <h2>I'm Open To Work</h2>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration= {500}
                    >Hide Me</Link>
                </div>
            </div>
        </div>
    )
}

export default Freelance