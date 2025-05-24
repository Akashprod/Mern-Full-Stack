import { ADD, SUBTRACT } from "../../actionType"

export const addFunction = (payload)=>{
    return {
        type : ADD,
        payload : payload
    }
}

export const subtractFunction = (payload)=>{
    return {
        type : SUBTRACT,
        payload : payload
    }
}





