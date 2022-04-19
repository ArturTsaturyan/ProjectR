import { combineReducers } from "redux";//սրանով մենք միացնում ենք
//բոլոր ռեդյուսերները մեր կոմպոնենտների:
import contactReducer from "./contact/contact.reducer";
import { likesReducer } from "./about/Reduser";



const rootReducer = combineReducers({//այստեղ մենք գրելու ենք բոլոր մեր ռեդուսերները
    contact:contactReducer,
    likes:likesReducer,
})

export default rootReducer;