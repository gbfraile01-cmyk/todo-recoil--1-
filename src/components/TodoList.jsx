import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../selectors/filteredTodoListState.js';
import TodoItem from './TodoItem.jsx';

export default function TodoList() {
  const todos = useRecoilValue(filteredTodoListState);

  if (todos.length === 0) {
    return <p className="empty">Nenhuma tarefa por aqui.</p>;
  }

  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
