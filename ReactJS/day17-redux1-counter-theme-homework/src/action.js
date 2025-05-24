export const addFunction = (payload)=>{
    return {
        type : "ADD",
        payload : payload
    }
}

export const subtractFunction = (payload)=>{
    return {
        type : "SUBTRACT",
        payload : payload
    }
}

export const handleTheme= (payload)=>{
    return{
        type : "TOGGLE_THEME",
        payload : payload
    }
    }
