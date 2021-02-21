import React, {ChangeEvent, useReducer} from "react";
import {TextField} from "@material-ui/core";
import Button from "../../../common/button/Button";
import s from './Form.module.css'
import formReducer, {
    changeEmailValueAC,
    changeMessageValueAC,
    changeNameValueAC,
    initialState, preloaderStatusChangeAC,
    setErrorTextAC,
    submitFormEventAC
} from "../../../state/form-reducer";
import {api} from "../../../api/api";
import Preloader from "../preloader/Preloader";

const Form = () => {

    const [state, dispatch] = useReducer(formReducer, initialState);

    const nameChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeNameValueAC(e.currentTarget.value))
    }
    const emailChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeEmailValueAC(e.currentTarget.value))
    }
    const messageChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMessageValueAC(e.currentTarget.value))
    }

    function sendEmail(e: any) {  // пофиксить any
        dispatch(preloaderStatusChangeAC(true))
        e.preventDefault();
        api.sendMessage(e)
            .then((res) => {
                dispatch(submitFormEventAC())
                dispatch(preloaderStatusChangeAC(false))
            }).catch((error) => {
            dispatch(setErrorTextAC(error));
            dispatch(preloaderStatusChangeAC(false))
        })
    }

    return (
        <form onSubmit={sendEmail}>
            <TextField disabled={state.preloaderStatus} onChange={nameChangeHandle} value={state.nameValue} name="from_name" id="inputName"
                       label="Your Name" variant="outlined"/>
            <TextField disabled={state.preloaderStatus} onChange={emailChangeHandle} value={state.emailValue} id="inputMail" label="Your Email"
                       variant="outlined" type="email" name="from_email"/>
            <TextField multiline
                       rows={7}
                       rowsMax={7}
                       disabled={state.preloaderStatus}
                       id="TextArea" label="Your message" variant="outlined"
                       name="message"
                       onChange={messageChangeHandle} value={state.messageValue}
            />
            {state.preloaderStatus &&  <div className={s.preloader}>
                <Preloader/>
            </div>}
            {state.error &&  <div className={s.preloader}>
               <span>{state.error}</span>
            </div>}
            <div className={s.button}>
                <Button disabled={state.preloaderStatus} type={"submit"} name={"Send message"}/>
            </div>
        </form>)
}

export default Form