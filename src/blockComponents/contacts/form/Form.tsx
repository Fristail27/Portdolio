import React, {FormEvent} from "react";
import {TextField} from "@material-ui/core";
import emailjs from "emailjs-com";
import Button from "../../../common/button/Button";
import s from './Form.module.css'

const Form = () => {
    function sendEmail(e:any) {  // пофиксить any
        e.preventDefault();
        emailjs.sendForm('myID_228595605405', 'template_kw4bade', e.target, 'user_Rwv74PpOgOBagouH8o8nq')
            .then((result) => {
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <form onSubmit={sendEmail}>
            <TextField type="text" name="from_name" id="inputName" label="Your Name" variant="outlined"/>
            <TextField id="inputMail" label="Your Email" variant="outlined" type="text" name="from_email"/>
            <TextField multiline
                       rows={7}
                       rowsMax={7}
                       id="TextArea" label="Your message" variant="outlined"
                       type="text" name="message"
            />
            <div className={s.button}>
                <Button type={"submit"} name={"Send message"}/>
            </div>
        </form>)
}

export default Form