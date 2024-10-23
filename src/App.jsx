import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Outlet /> {/* This will render the child route (Home) */}
      <Footer />
    </div>
  );
}

export default App;
