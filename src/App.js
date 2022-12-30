// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './component/Navbar'
import { Banner } from "./component/Banner";
import { Skill } from "./component/Skills";
import { Project } from "./component/Project";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Banner />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
