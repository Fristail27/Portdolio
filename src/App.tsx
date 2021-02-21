import React from 'react';
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

function App() {
  return (
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
  );
}

export default App;
