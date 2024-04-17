import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import Login_Registration from './pages/Sing/Login_Registration';
import UserPage from './pages/usersPages/UserPage';
function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login_registration" element={<Login_Registration />} /> 
            <Route path='/userPage' element={<UserPage />} />
        </Routes>
    </Router>
  )
}

export default App
