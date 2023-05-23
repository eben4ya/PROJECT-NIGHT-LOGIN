import React from 'react';
import Todo from './components/Todo';
import Navbar from './components/Navbar';
import OurTeam from './components/OurTeam';
import Main from './components/Main';

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Todo />
      <OurTeam />
    </div>
  )
}

export default App;

