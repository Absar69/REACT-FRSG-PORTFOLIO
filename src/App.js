import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contact } from "./components/Contact";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Technology } from "./components/Technology";
import { Payments } from "./components/Payments";
import { ProjectDetails } from "./components/ProjectDetails"; // Import the new component
import { Careers } from "./components/Careers"; // Import the new component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Technology />
              <Projects />
              <Payments />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
    
  );
}

export default App;
