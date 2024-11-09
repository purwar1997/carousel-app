import { useState } from 'react';
import Carousel from './components/Carousel';
import './App.css';

const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <main>
      <h1>Welcome to iNeuron</h1>
      <p>Which technology do you want to learn ?</p>
      <Carousel index={index} setIndex={setIndex} />
    </main>
  );
};

export default App;
