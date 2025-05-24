export const loginRequestAction = ()=>{
    return{type : "LOGIN_REQUEST"}
}
export const loginSuccessAction = (payload)=>{
    return{type : "LOGIN_SUCCESS",
        payload : payload
    }
}
export const loginFailureAction = ()=>{
    return{type : "LOGIN_FAILURE"}
}