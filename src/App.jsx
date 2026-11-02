import TodoForm from './components/TodoForm.jsx';
import TodoFilter from './components/TodoFilter.jsx';
import TodoList from './components/TodoList.jsx';

export default function App() {
  return (
    <main className="app">
      <h1 className="app__title">Lista de tarefas</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </main>
  );
}
