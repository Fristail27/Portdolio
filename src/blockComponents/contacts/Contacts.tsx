import React from "react";
import s from "./Contacts.module.css"
import containerStyle from "../../common/styles/Container.module.css"
import Form from './form/Form'

const Contacts = () => {

    return (
        <div className={s.contactsBlock} id={"contact"}>
            <div className={containerStyle.container}>
                <div className={s.field}>
                    <h2>Contact Me</h2>
                    <div className={s.form}>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts