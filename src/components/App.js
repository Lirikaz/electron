import { useState } from 'react';
import './App.css';
import Welcome from './Welcome/Welcome';

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <label className='label'>Имя</label>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <Welcome name={name}/>
    </div>
  );
}

export default App;