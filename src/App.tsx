import React, {createContext, useState} from 'react';
import './App.scss';
import Header from "./blockComponents/header/Header";
import Main from "./blockComponents/main/Main";
import Skills from "./blockComponents/skills/Skills";
import Works from "./blockComponents/works/Works";
import Freelance from "./blockComponents/freelance/Freelance";
import Contacts from "./blockComponents/contacts/Contacts";
import Footer from "./blockComponents/footer/Footer";
import MyOpen from "./blockComponents/myOpen/MyOpen";
import UpButton from "./common/upButton/UpButton";
import {Languages} from "./constants/enums";

export const AppContext = createContext<{
    lang: Languages,
    setLang?: React.Dispatch<React.SetStateAction<Languages>>
}>({lang: Languages.ru})

function App() {
    const [lang, setLang] = useState(Languages.ru)

    return (
        <AppContext.Provider value={{lang, setLang}}>
            <div className="App">
                <Header/>
                <Main/>
                <MyOpen/>
                <Skills/>
                <Works/>
                <Freelance/>
                <Contacts/>
                <Footer/>
                <UpButton/>
            </div>
        </AppContext.Provider>
    );
}

export default App;
