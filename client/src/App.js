import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import OurTeam from './components/ourteam/OurTeam';
import Todo from './components/todo/Todo';

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

