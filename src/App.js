import React, { useState } from 'react';
import requests from './API/requests';

import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import './App.css';

function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">

      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />

    </div>
  );
}

export default App;
