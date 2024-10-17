import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* You can render other components here */}
      <Outlet /> {/* This will render the child route (Home) */}
    </div>
  );
}

export default App;
