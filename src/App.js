import './App.css';
import { useRef } from "react";
import HomeAbout from './Components/HomeAbout';
import Nav from './Components/Nav';
import Projects from './Components/Projects';

function App() {
  const ref = useRef(null);
  return (
    <div className="App">
      <Nav refToProjects={ref}/>
      <HomeAbout/>
      <Projects ref={ref}/>
    </div>
  );
}

export default App;
