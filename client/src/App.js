import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import OurTeam from './components/OurTeam';
import Todo from './components/Todo';

const App = () => {
  return (
    <>
        <Navbar />
        <Main />
        <Todo/>
        <OurTeam />
    </>
  );
}

export default App;

