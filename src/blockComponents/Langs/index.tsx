import React, {useContext} from "react";
import {AppContext} from "../../App";
import {Button} from "@material-ui/core";
import styles from './styles.module.css'
import {Languages} from "../../constants/enums";

export const Langs = () => {

    const {lang, setLang} = useContext(AppContext)

    return <div className={styles.langBtns}>
        <Button
            color={lang === Languages.ru ? "primary" : 'default'}
            variant={lang === Languages.ru ? "contained" : "outlined"}
            onClick={() => setLang?.(Languages.ru)}
        >RU</Button>
        <Button
            color={lang === Languages.en ? "primary" : 'default'}
            variant={lang === Languages.en ? "contained" : "outlined"}
            onClick={() => setLang?.(Languages.en)}
        >EN</Button>
    </div>
}
