import React from "react";
import s from "./SocialIcons.module.scss";
import CodeWarsIcon from "../../assets/links/codewars_logo_icon_145389.svg";
import GitHubIcon from "../../assets/links/github_logo_icon_143772.svg";
import VKIcon from "../../assets/links/vk_icon_135042.svg";
import WhatsAppIcon from "../../assets/links/whatsapp_icon-icons.com_65489.svg";
import TelegrammIcon from "../../assets/links/telegram_icon_131945.svg";
import Din from "../../assets/links/linkedin_logo_icon_143748.svg";

const SocialIcons: React.FC = () => {
    return (
        <div className={s.socials}>
            <a target="blank" href="https://www.codewars.com/users/Fristail27">
                <img src={CodeWarsIcon} alt="no"/>
            </a>
            <a target="blank" href="https://github.com/Fristail27">
                <img src={GitHubIcon} alt="no"/>
            </a>
            <a target="blank" href="https://vk.com/fristail">
                <img src={VKIcon} alt="no"/>
            </a>
            <a target="blank" href="https://wa.me/79806713362">
                <img src={WhatsAppIcon} alt="no"/>
            </a>
            <a target="blank" href="https://telegram.me/Fristail27">
                <img src={TelegrammIcon} alt="no"/>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%80%D1%8B%D0%B6%D0%BE%D0%B2-829845201/">
                <img src={Din} alt="no"/>
            </a>
        </div>
    )
}

export default SocialIcons
