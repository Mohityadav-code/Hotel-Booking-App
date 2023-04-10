
import './App.css';
import TopNav from './components/Elements/TopNav';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './booking/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
    <TopNav />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  </Router>
    </>
  );
}

export default App;
