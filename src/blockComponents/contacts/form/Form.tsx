import React, {BaseSyntheticEvent, ChangeEvent, useReducer} from "react";
import {TextField} from "@material-ui/core";
import Button from "../../../common/button/Button";
import s from './Form.module.css'
import formReducer, {
    changeEmailValueAC,
    changeMessageValueAC,
    changeNameValueAC,
    initialState, preloaderStatusChangeAC,
    setErrorTextAC, setFirstTouchEmailAC, setFirstTouchMessageAC, setFirstTouchNameAC,
    submitFormEventAC
} from "../../../state/form-reducer";
import {api} from "../../../api/api";
import Preloader from "../preloader/Preloader";

const Tada = require('react-reveal/Tada');

const Form = () => {

    const [state, dispatch] = useReducer(formReducer, initialState);

    // обработчики изменения инпутов
    const nameChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeNameValueAC(e.currentTarget.value))
    }
    const emailChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeEmailValueAC(e.currentTarget.value))
    }
    const messageChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMessageValueAC(e.currentTarget.value))
    }

    // функция отправки сообщения.
    function sendEmail(e: BaseSyntheticEvent) {  // пофиксить any
        if (!nameInputError && !emailInputError && messageInputError) {
            dispatch(preloaderStatusChangeAC(true))
            e.preventDefault();
            api.sendMessage(e)
                .then(() => {
                    dispatch(submitFormEventAC())
                    dispatch(preloaderStatusChangeAC(false))
                }).catch((error) => {
                dispatch(setErrorTextAC(error));
                dispatch(preloaderStatusChangeAC(false))
            })
        } else {
            e.preventDefault();
            dispatch(setFirstTouchNameAC())
            dispatch(setFirstTouchEmailAC())
            dispatch(setFirstTouchMessageAC())
        }

    }

    // обработчики активации первого касания
    const firstTouchNameInput = () => {
        dispatch(setFirstTouchNameAC())
    }
    const firstTouchEmailInput = () => {
        dispatch(setFirstTouchEmailAC())
    }
    const firstTouchMessageInput = () => {
        dispatch(setFirstTouchMessageAC())
    }

    // условия ошибок для инпутов
    const nameInputError = state.firstTouchNameInput ? state.nameValue.length < 4 : false
    const emailInputError = state.firstTouchEmailInput ? state.emailValue.length < 5 : false
    const messageInputError = state.firstTouchMessageInput ? state.messageValue.length < 10 : false

    // условия появления текста ошибок в инпутах
    const helperTextForNameValue = nameInputError ? "Name should have at least 4 letters" : false
    const helperTextForEmailValue = emailInputError ? "Enter the correct email" : false
    const helperTextForMessageValue = messageInputError ? "Name should have at least 4 letters" : false
    //@ts-ignore
    window.state = state

    return (
        <form onSubmit={sendEmail}>
            <TextField error={nameInputError} helperText={helperTextForNameValue} disabled={state.preloaderStatus}
                       onBlur={firstTouchNameInput} onChange={nameChangeHandle} value={state.nameValue}
                       name="from_name" id="inputName"
                       label="Your Name" variant="outlined"/>
            <TextField error={emailInputError} helperText={helperTextForEmailValue} disabled={state.preloaderStatus}
                       onChange={emailChangeHandle} onBlur={firstTouchEmailInput} value={state.emailValue}
                       id="inputMail" label="Your Email"
                       variant="outlined" type="email" name="from_email"/>
            <TextField multiline
                       rows={7}
                       rowsMax={7}
                       error={messageInputError}
                       helperText={helperTextForMessageValue}
                       onBlur={firstTouchMessageInput}
                       disabled={state.preloaderStatus}
                       id="TextArea" label="Your message" variant="outlined"
                       name="message"
                       onChange={messageChangeHandle} value={state.messageValue}
            />
            {state.preloaderStatus && <div className={s.preloader}>
                <Preloader/>
            </div>}
            {state.error && <div className={s.preloader}>
                <span>{state.error}</span>
            </div>}
            <div className={s.button}>
                <Tada>
                    <Button disabled={state.preloaderStatus} type={"submit"} name={"Send message"}/>
                </Tada>
            </div>
        </form>)
}

export default Form