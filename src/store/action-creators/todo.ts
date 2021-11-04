import axios from "axios";
import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react";
import { TodoAction, TodoActionTypes } from "../../types/todo";


export const fetchTodos = (page = 1, limit = 25) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS })
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
        params: { _page: page, _limit: limit }
      });
      setTimeout(() => {
        dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data })
      }, 600)

    } catch (err) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: "При загрузке списка задач произошла ошибка..."
      })
    }
  }
}

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}