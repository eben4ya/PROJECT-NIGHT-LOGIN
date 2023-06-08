import './App.css';
import Benefits from './components/benefits/Benefits';
import Navbar from './components/navbar/Navbar';
import OurTeam from './components/ourteam/OurTeam';
import Todo from './components/todo/Todo';

const App = () => {
  return (
    <>
        <Navbar />
        <Benefits />
        <Todo/>
        <OurTeam />
    </>
  );
}

export default App;

