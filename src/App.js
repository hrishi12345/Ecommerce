import {Route, Routes, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import About from './components/About/About.js';
import Home from './Home.js';
import Contact from './components/Contact/Contact.js';

import { useContext } from 'react';
import { AuthContext } from './store/auth_context.js';
import AuthForm from './components/Navbar/Login.js';

function App() {
  const isLog = useContext(AuthContext);

  return (
    <Routes>
      {!isLog.isLogin && <Route path='*' element={<Navigate to='/login' />} />}
      {isLog.isLogin && <Route path='/' element={<Home />} />}
      {isLog.isLogin && <Route path='/about' element={<About />} />}
      {isLog.isLogin && <Route path='/contact' element={<Contact />} />}
      <Route path='/login' element={<AuthForm />} />
    </Routes>
  );
}

export default App;
