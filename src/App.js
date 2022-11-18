import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {
  return (
    <div className="App">
      <h1>Greetings World!</h1>
      <div>
        <h3>
        I'm Edwin Yu
        </h3>
        <h6>
          Full-Stack Developer
        </h6>
      </div>
      <br/>
    <About/>
    <Skills/>
    <br/>
    <Projects/>
    </div>
  );
}

