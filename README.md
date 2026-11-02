# todo-recoil

Lista de tarefas em React com estado global gerenciado pelo Recoil. É possível adicionar, concluir e remover tarefas e alternar entre as visões todas, concluídas e pendentes.

## Tecnologias

- React 18
- Recoil
- Vite
- CSS puro

## Como o estado funciona

| Conceito | Arquivo | Função |
| --- | --- | --- |
| `RecoilRoot` | `src/main.jsx` | Disponibiliza o estado global para a aplicação |
| Átomo `todoListState` | `src/atoms/todoListState.js` | Guarda a lista de tarefas |
| Átomo `todoFilterState` | `src/atoms/todoFilterState.js` | Guarda o filtro ativo |
| Seletor `filteredTodoListState` | `src/selectors/filteredTodoListState.js` | Lê os dois átomos e retorna as tarefas filtradas |
| `useRecoilState` | `TodoFilter` | Lê e altera o filtro |
| `useRecoilValue` | `TodoList` | Lê a lista filtrada |
| `useSetRecoilState` | `TodoForm` e `TodoItem` | Altera a lista sem precisar ler o valor |

## Estrutura

```
src/
├── atoms/        todoListState, todoFilterState
├── components/   TodoForm, TodoFilter, TodoList, TodoItem
├── selectors/    filteredTodoListState
├── App.jsx
├── main.jsx
└── styles.css
```

## Como rodar localmente

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção: `npm run build`.

O Recoil 0.7 funciona com o React 18. Por isso, o projeto não usa o React 19.
