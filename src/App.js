import './App.css';
import { useRef } from "react";
import HomeAbout from './Components/HomeAbout';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const projectRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="App">
      <Nav refToProjects={projectRef} refToHome={homeRef}  refToContact={contactRef}/>
      <HomeAbout ref={homeRef}/>
      <Projects ref={projectRef}/>
      <Contact ref={contactRef}/>
    </div>
  );
}

export default App;
