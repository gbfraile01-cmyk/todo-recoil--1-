import { atom } from 'recoil';

// Lista de tarefas: [{ id, text, completed }]
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});
