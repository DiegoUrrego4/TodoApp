import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();
const tarea = new Todo('Aprender Javascript!!');

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC123');

// setTimeout(() => {
//   localStorage.removeItem('mi-key');
// }, 1500);
