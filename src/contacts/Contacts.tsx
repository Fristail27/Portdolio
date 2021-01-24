import React from "react";
import s from "./Contacts.module.css"
import containerStyle from "./../common/styles/Container.module.css"
import Button from "../common/button/Button";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={containerStyle.container}>
                <div className={s.field}>
                    <h2>Контакты</h2>
                    <div className={s.form}>
                        <form action="">
                            <input type="text"/>
                            <input type="text"/>
                            <textarea name="" id=""></textarea>
                        </form>
                    </div>
                    <Button name={"Отправить"}/>
                </div>
            </div>
        </div>
    )
}

export default Contacts