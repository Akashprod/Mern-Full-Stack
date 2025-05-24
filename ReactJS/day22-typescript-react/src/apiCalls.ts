import axios, { AxiosResponse } from "axios";
import { Todo } from "./constants";

// type todo = {
//   id?: number;
//   title: string;
//   status: boolean;
// };

export const addTodo = async (newTodo: Todo) => {
  axios.post("http://localhost:3000/todos", newTodo);
};

export const getTodo = async () => {
  let res: AxiosResponse<Todo[]> = await axios.get(
    "http://localhost:3000/todos"
  );
  console.log(res.data);
    return res.data;
};

export const toggleTodo = async (status: boolean, id?: number) => {
  return axios.patch(`http://localhost:3000/todos/${id}`, { status: !status });
};
