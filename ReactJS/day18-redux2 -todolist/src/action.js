import { ADD, GET_TODO_SUCCESS, POST_TODO_SUCCESS, SUBTRACT, TODO_ERROR, TODO_REQUEST } from "./actionType"

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

export const getRequestAction = ()=>{
    return{
        type : TODO_REQUEST
    }
}

export const getSuccessAction = (payload)=>{
    return{
        type : GET_TODO_SUCCESS,
        payload : payload
    }
}

export const getErrorAction = ()=>{
    return{
        type : TODO_ERROR
    }
}

export const postRequestAction = ()=>{
    return{
        type : TODO_REQUEST
    }
}

export const postSuccessAction = (payload)=>{
    return{
        type : POST_TODO_SUCCESS,
        payload
    }
}

export const postErrorAction = ()=>{
    return{
        type : TODO_ERROR
    }
}



