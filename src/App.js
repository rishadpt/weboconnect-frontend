import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editprofile from './Editprofile/Editprofile';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';

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
