import Header from './components/Header';
import Home from './view/Home';
import Shop from './view/Shop';
import { useState } from 'react';
import './App.css';

function App() {
  const [view, setview] = useState('home');

  function renderView() {
    if (view === 'home') {
      return <Home setview={setview} />;
    } else {
      return <Shop />;
    }
  }
  return (
    <div className='App'>
      <Header setview={setview} />
      {renderView()}
    </div>
  );
}

export default App;
