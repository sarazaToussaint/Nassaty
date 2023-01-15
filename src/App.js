import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Project from './component/Project';
import Contact from './component/Contact';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
