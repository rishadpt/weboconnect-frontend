import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editprofile from './components/Editprofile/Editprofile';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/editprofile" element={<Editprofile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
