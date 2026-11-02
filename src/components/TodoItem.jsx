import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoListState.js';

export default function TodoItem({ todo }) {
  const setTodos = useSetRecoilState(todoListState);

  const handleToggle = () => {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleRemove = () => {
    setTodos((todos) => todos.filter((item) => item.id !== todo.id));
  };

  return (
    <li className={`item ${todo.completed ? 'is-done' : ''}`}>
      <label className="item__label">
        <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
        <span className="item__text">{todo.text}</span>
      </label>
      <button
        type="button"
        className="btn btn--danger"
        onClick={handleRemove}
        aria-label={`Remover tarefa ${todo.text}`}
      >
        Remover
      </button>
    </li>
  );
}
