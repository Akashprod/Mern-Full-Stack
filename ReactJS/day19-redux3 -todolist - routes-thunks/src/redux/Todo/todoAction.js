import { GET_TODO_SUCCESS, POST_TODO_SUCCESS, TODO_ERROR, TODO_REQUEST } from "../../actionType"

import axios from "axios";


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

export const getTodo = (dispatch) => {
    dispatch(getRequestAction());
    axios
      .get("http://localhost:3000/todos")
      .then((res) =>
        // console.log(res.data)
        //here we are going to add this to store
        dispatch(getSuccessAction(res.data))
      )
      .catch((error) =>
        // console.log(error)
        //here we are going to add this to store
        dispatch(getErrorAction())
      );
  };

  export const postTodo = (title)=>(dispatch) => {
    dispatch(postRequestAction());
    const newTodo = {
      title: title,
    };

    axios
      .post("http://localhost:3000/todos", newTodo)
      .then((res) =>
        // console.log(res.data)
        //here we are going to add this to store
        dispatch(postSuccessAction(res.data))
      )
      .catch((error) =>
        // console.log(error)
        //here we are going to add this to store
        dispatch(postErrorAction())
      );
  };



