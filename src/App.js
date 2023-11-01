import logo from './logo.svg';
import './App.css';
import { FcAddDatabase } from 'react-icons/fc';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container mt-5'>
      <h1 className='fs-3 title'>Has completado <span>0</span> de <span>0</span> TODOs</h1>
      <div className='container mt-5 mb-4'>
        <div className='row'>
          <input className='py-2 fs-3 text-center' type='text' placeholder='Cortar cebolla' />
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <ul className='col-12'>
            <li>Crear todo list maquetado</li>
            <li>Manipulacion DummyData</li>
            <li>Crear array de objetos</li>
          </ul>
        </div>
      </div>
      <buton className="btn"><FcAddDatabase size={50} /></buton>
    </div>
  );
}

export default App;
