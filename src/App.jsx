import React from 'react';

import './App.css';

import Navigation from './components/Navigation/Navigation';
import StepInfo from './components/Navigation/StepInfo/StepInfo';
import QuestionsSection from './components/Navigation/QuestionsSection/QuestionsSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
      </header>
      <main>
        <StepInfo/>
        <QuestionsSection/>
      </main>
    </div>
  );
}

export default App;
