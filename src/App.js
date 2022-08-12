import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editprofile from './components/Editprofile/Editprofile';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup';
import { AuthProvider } from './Contexts/EssentialContext';

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<RequireAuth> <Home /> </RequireAuth>} />
            <Route path="/editprofile" element={<RequireAuth> <Editprofile /> </RequireAuth>} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
