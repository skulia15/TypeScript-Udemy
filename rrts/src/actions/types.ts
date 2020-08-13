import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  deleteTodos
}

export type Action =  FetchTodosAction | DeleteTodoAction;