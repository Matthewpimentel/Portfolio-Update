import './App.css';
import HomeAbout from './Components/HomeAbout';
import Nav from './Components/Nav';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <HomeAbout/>
      <Projects/>
    </div>
  );
}

export default App;
