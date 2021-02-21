import emailjs from "emailjs-com";
const serviceID = 'myID_228595605405'
const templateID = 'template_kw4bade'
const userID = 'user_Rwv74PpOgOBagouH8o8nq'


export const api = {
    sendMessage (e:any) {
        return emailjs.sendForm(serviceID, templateID, e.target, userID)
    }
}