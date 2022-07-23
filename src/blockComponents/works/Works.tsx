import React from "react";
import s from "./Works.module.css"
import containerStyle from "../../common/styles/Container.module.css"
import Work from "./work/Work";
import Counter from "../../assets/works/Screenshot_1.jpg"
import authService from "../../assets/works/authService.jpg"
import auth2 from "../../assets/works/auth2.jpg"
import randomTree from "../../assets/works/randomTree.jpg"
import bot from "../../assets/works/bot.jpg"
import TodolistImg from "../../assets/works/TodolistImg.jpg"
const Fade = require('react-reveal/Fade');

const Works = () => {
    return (
        <div id={"works"} className={s.worksBlock}>
            <div className={containerStyle.container}>
                <div className={s.field}>
                    <div className={s.titleBlock}>
                        <h2>My works</h2>
                    </div>
                    <div className={s.works}>
                        <Fade left>
                            <Work name="OAuth 2.0 Service"
                                  img={authService}
                                  description="Кастомный сервис по протоколу OAuth2.0"
                                  gitHubLink={'https://gitlab.com/nexia-a6-pro/na6-backend/-/tree/develop'}
                                  demoLinkDisabled
                            />
                            <Work name="OAuth 2.0 Клиент"
                                  img={auth2}
                                  description={"Клиент на NextJS с реализованной авторизацией через VK и кастомный сервис авторизации"}
                                  gitHubLink={'https://gitlab.com/nexia-a6-pro/na6-frontend/-/tree/develop'}
                                  demoLinkDisabled
                            />
                            <Work name="Чат бот для VK"
                                  img={bot}
                                  description={"Чат бот для VK на express"}
                                  gitHubLink={'https://github.com/Fristail27/BOT-VK'}
                                  demoLink={'https://vk.com/public205979130'}
                            />
                        </Fade>
                    </div>
                    <div className={s.works}>
                        <Fade right>
                            <Work img={Counter}
                                  name="Counter"
                                  description={"React, Redux, JavaScript, TypeScript, HTML/CSS, functional components, hooks, Material UI"}
                                  gitHubLink={'https://github.com/Fristail27/Counter/tree/counter-redux'}
                                  demoLink={'https://fristail27.github.io/Counter'}/>
                            <Work name="RandomTree"
                                  img={randomTree}
                                  description={"Алгоритм отрисовки на канвасе рандомного дерева"}
                                  gitHubLink={'https://github.com/Fristail27/RandomTree'}
                                  demoLinkDisabled
                            />
                            <Work name="Todolist"
                                  img={TodolistImg}
                                  description={"React, Redux, JavaScript, TypeScript, RestAPI, HTML/CSS, functional components, hooks, Axios, Material UI, Redux-thunk, Formik,"}
                                  gitHubLink={'https://github.com/Fristail27/Todolist'}
                                  demoLink={'https://fristail27.github.io/Todolist/'}
                            />
                            </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
