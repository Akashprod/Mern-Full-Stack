export const reducerFunction = (state,{type,payload})=>{
    switch(type){
        case "ADD":{
            return {...state, count : state.count + payload}
        }
        case "SUBTRACT":{
            return {...state, count : state.count - payload}
        }
        default : return state
    }
}