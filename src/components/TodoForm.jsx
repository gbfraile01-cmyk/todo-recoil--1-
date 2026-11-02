import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoListState.js';

export default function TodoForm() {
  const [text, setText] = useState('');
  const setTodos = useSetRecoilState(todoListState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = text.trim();
    if (!title) return;

    setTodos((todos) => [
      ...todos,
      { id: crypto.randomUUID(), text: title, completed: false },
    ]);
    setText('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="new-todo" className="sr-only">
        Nova tarefa
      </label>
      <input
        id="new-todo"
        className="form__input"
        type="text"
        placeholder="O que precisa ser feito?"
        value={text}
        onChange={(event) => setText(event.target.value)}
        autoComplete="off"
      />
      <button className="btn btn--primary" type="submit" disabled={!text.trim()}>
        Adicionar
      </button>
    </form>
  );
}
