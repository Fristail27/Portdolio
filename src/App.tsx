import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import Freelance from "./freelance/Freelance";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import MyOpen from "./myOpen/MyOpen";

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
    </div>
  );
}

export default App;
