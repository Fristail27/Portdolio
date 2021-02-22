const CHANGE_NAME_VALUE = 'CHANGE_NAME_VALUE'
const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE'
const CHANGE_MESSAGE_VALUE = 'CHANGE_MESSAGE_VALUE'
const SUBMIT_FORM_EVENT = 'SUBMIT_FORM_EVENT'
const PRELOADER_STATUS_CHANGE = 'PRELOADER_STATUS_CHANGE'
const SET_ERROR_TEXT = 'SET_ERROR_TEXT'
const SET_FIRST_TOUCH_NAME = 'SET_FIRST_TOUCH_NAME'
const SET_FIRST_TOUCH_EMAIL = 'SET_FIRST_TOUCH_EMAIL'
const SET_FIRST_TOUCH_MESSAGE = 'SET_FIRST_TOUCH_MESSAGE'

export type InitialStateType = {
    nameValue: string;
    emailValue: string;
    messageValue: string;
    preloaderStatus: boolean;
    error: string | null
    firstTouchNameInput: boolean;
    firstTouchEmailInput: boolean;
    firstTouchMessageInput: boolean;
}

export const initialState:InitialStateType = {
    nameValue: "",
    emailValue: "",
    messageValue: "",
    preloaderStatus: false,
    error: null,
    firstTouchNameInput: false,
    firstTouchEmailInput: false,
    firstTouchMessageInput: false,
}

type ActionType =
    | changeNameValueActionType
    | changeEmailValueActionType
    | changeMessageValueActionType
    | submitFormEventActionType
    | preloaderStatusChangeActionType
    | setErrorTextActionType
    | setFirstTouchEmailActionType
    | setFirstTouchMessageActionType
    | setFirstTouchNameActionType

const formReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case CHANGE_NAME_VALUE:
            return {
                ...state,
                nameValue: action.value
            }
        case CHANGE_EMAIL_VALUE:
            return {
                ...state,
                emailValue: action.value
            }
        case CHANGE_MESSAGE_VALUE:
            return {
                ...state,
                messageValue: action.value
            }
        case SUBMIT_FORM_EVENT:
            return {
                ...state,
                nameValue: "",
                emailValue: "",
                messageValue: "",
            }
        case PRELOADER_STATUS_CHANGE:
            return {
                ...state,
                preloaderStatus: action.status
            }
        case SET_ERROR_TEXT:
            return {
                ...state,
                error: action.text
            }
        case SET_FIRST_TOUCH_EMAIL:
            return {
                ...state,
                firstTouchEmailInput: true
            }
        case SET_FIRST_TOUCH_MESSAGE:
            return {
                ...state,
                firstTouchMessageInput: true
            }
        case SET_FIRST_TOUCH_NAME:
            return {
                ...state,
                firstTouchNameInput: true
            }
        default:
            return state
    }
}

// AC ввода текста в инпуты
type changeNameValueActionType = {type: typeof CHANGE_NAME_VALUE, value:string}
export const changeNameValueAC = (value:string):changeNameValueActionType => ({type: CHANGE_NAME_VALUE, value})
type changeEmailValueActionType = {type: typeof CHANGE_EMAIL_VALUE, value:string}
export const changeEmailValueAC = (value:string):changeEmailValueActionType => ({type: CHANGE_EMAIL_VALUE, value})
type changeMessageValueActionType = {type: typeof CHANGE_MESSAGE_VALUE, value:string}
export const changeMessageValueAC = (value:string):changeMessageValueActionType => ({type: CHANGE_MESSAGE_VALUE, value})

// AC сабмита формы и очистки полей
type submitFormEventActionType = {type: typeof SUBMIT_FORM_EVENT}
export const submitFormEventAC = ():submitFormEventActionType => ({type: SUBMIT_FORM_EVENT})

// AC включения прелоадера
type preloaderStatusChangeActionType = {type: typeof PRELOADER_STATUS_CHANGE, status:boolean}
export const preloaderStatusChangeAC = (status:boolean):preloaderStatusChangeActionType => ({type: PRELOADER_STATUS_CHANGE, status})

// AC установки сообщения ошибки
type setErrorTextActionType = {type: typeof SET_ERROR_TEXT, text:string}
export const setErrorTextAC = (text:string):setErrorTextActionType => ({type: SET_ERROR_TEXT, text})

// AC установки первого касания для включения error  инпутах
type setFirstTouchNameActionType = {type: typeof SET_FIRST_TOUCH_NAME}
export const setFirstTouchNameAC = ():setFirstTouchNameActionType => ({type: SET_FIRST_TOUCH_NAME})
type setFirstTouchEmailActionType = {type: typeof SET_FIRST_TOUCH_EMAIL}
export const setFirstTouchEmailAC = ():setFirstTouchEmailActionType => ({type: SET_FIRST_TOUCH_EMAIL})
type setFirstTouchMessageActionType = {type: typeof SET_FIRST_TOUCH_MESSAGE}
export const setFirstTouchMessageAC = ():setFirstTouchMessageActionType => ({type: SET_FIRST_TOUCH_MESSAGE})

export default formReducer
