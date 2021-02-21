import React from "react";
import s from "./Contacts.module.css"
import containerStyle from "../../common/styles/Container.module.css"
import Button from "../../common/button/Button";
import {TextField} from "@material-ui/core";

const Contacts = () => {

    return (
        <div className={s.contactsBlock} id={"contact"}>
            <div className={containerStyle.container}>
                <div className={s.field}>
                    <h2>Contact Me</h2>
                    <div className={s.form}>
                        <form action="">
                            <TextField className={s.input} id="inputName" label="Your Name" variant="outlined"/>
                            <TextField id="inputMail" label="Your Email" variant="outlined"/>
                            <TextField multiline
                                       rows={7}
                                       rowsMax={7}
                                       id="TextArea" label="Your message" variant="outlined"
                            />
                        </form>
                    </div>
                    <div className={s.button}> <Button  name={"Send message"}/></div>
                </div>
            </div>
        </div>
    )
}

export default Contacts