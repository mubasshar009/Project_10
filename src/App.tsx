import './App.css';
import Stepper from './Components/Stepper';
import Success from './Components/Success';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Stepper />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
