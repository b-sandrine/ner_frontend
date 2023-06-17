
import './App.css'
import Welcome from './pages/Welcome/Welcome'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

import { Route, Routes } from 'react-router'
function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App;
