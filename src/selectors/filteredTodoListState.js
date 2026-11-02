import { selector } from 'recoil';
import { todoFilterState } from '../atoms/todoFilterState.js';
import { todoListState } from '../atoms/todoListState.js';

// Deriva a lista visível a partir dos dois átomos.
// Recalcula sozinho quando a lista ou o filtro mudam.
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const todos = get(todoListState);
    const filter = get(todoFilterState);

    if (filter === 'completed') return todos.filter((todo) => todo.completed);
    if (filter === 'pending') return todos.filter((todo) => !todo.completed);
    return todos;
  },
});
