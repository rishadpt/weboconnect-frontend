import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
