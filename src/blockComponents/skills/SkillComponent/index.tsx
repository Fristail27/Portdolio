import React from "react";
import styles from './styles.module.css'

type SkillComponentPropsType = {
    img: string
    title: string
    description: string
    additionalTitle?: {
        title: string
        img: string
    }
}

export const SkillComponent: React.FC<SkillComponentPropsType> = ({img, title, description, additionalTitle}) => {
    return <div className={styles.skillContainer}>
        <div className={styles.title}>
            <div className={styles.icon}>
                <img src={img} alt=""/>
            </div>
            <h3>{title}</h3>
            {additionalTitle && <>
                <div className={styles.icon} style={{marginLeft: 12}}>
                    <img src={additionalTitle.img} alt=""/>
                </div>
                <h3>{additionalTitle.title}</h3>
            </>}
        </div>
        <span className={styles.description}>{description}</span>
    </div>
}
