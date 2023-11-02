import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoCreateButton } from './TodoCreateButton';
import { TodoItem } from './TodoItem';

const items = [
  {
    "text": "Crear todo list maquetado"
  },
  {
    "text": "Iterar items"
  },
  {
    "text": "lo que sea"
  },
  {
    "text": "same"
  },
];

function App() {
  return (
    <div className='container mt-5'>
      <TodoCounter completed={2} total={5}></TodoCounter>
      <TodoSearch></TodoSearch>

      <TodoList>
        {items.map (item => {
          <TodoItem key={item.text} text={item.text}></TodoItem>
        })}
      </TodoList>

      <TodoCreateButton></TodoCreateButton>
    </div>
  );
}

export default App;
