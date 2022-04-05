import './App.css';
import { useState } from 'react'
import Form from './components/Form';
import Lista from './components/Lista';

function App() {
  const [afazeres, setAfazeres] = useState([])
  
  return (
    <div className="App">
      <header className="App-header">
        <Form afazeres={afazeres} setAfazeres={setAfazeres}/>
        <Lista afazeres={afazeres} setAfazeres={setAfazeres}/>
      </header>
    </div>
  );
}

export default App;
