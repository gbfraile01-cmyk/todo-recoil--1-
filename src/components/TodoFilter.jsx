import { useRecoilState } from 'recoil';
import { todoFilterState } from '../atoms/todoFilterState.js';

const FILTERS = [
  { value: 'all', label: 'Todas' },
  { value: 'completed', label: 'Concluídas' },
  { value: 'pending', label: 'Pendentes' },
];

export default function TodoFilter() {
  const [filter, setFilter] = useRecoilState(todoFilterState);

  return (
    <div className="filter" role="group" aria-label="Filtrar tarefas">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className={`btn btn--filter ${filter === value ? 'is-active' : ''}`}
          aria-pressed={filter === value}
          onClick={() => setFilter(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
