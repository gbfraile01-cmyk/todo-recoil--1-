import { atom } from 'recoil';

// Filtro ativo: 'all' | 'completed' | 'pending'
export const todoFilterState = atom({
  key: 'todoFilterState',
  default: 'all',
});
