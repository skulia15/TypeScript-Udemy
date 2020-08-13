import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export interface FetchTodosAction {
	type: ActionTypes.fetchTodos;
	payload: Todo[];
}

export interface DeleteTodoAction {
	type: ActionTypes.deleteTodos;
	payload: number;
}

export const fetchTodos = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<Todo[]>(url);

		dispatch<FetchTodosAction>({
			type: ActionTypes.fetchTodos,
			payload: response.data
		});
	};
};

export const deleteTodo = (id: number): DeleteTodoAction => {
	return {
		type: ActionTypes.deleteTodos,
		payload: id
	}
}