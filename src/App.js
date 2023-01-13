import { Routes, Route } from 'react-router-dom';
import { Home } from "./component/Home";
import { Project } from "./component/Project";
import { Contact } from "./component/Contact";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>  
  );
}

export default App;
