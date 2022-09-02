import { Routes, Route } from 'react-router-dom';
import Calendario from './Components/Calendar.jsx';
import Landing from './Components/Landing.jsx';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/Calendar" element={<Calendario />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
