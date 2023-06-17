
import './App.css'
import Welcome from './pages/Welcome/Welcome'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Dashboard from './pages/Dashboard/Dashboard'
import Vehicles from './components/Vehicles/Vehicles'
import Owners from './components/Owners/Owners'

import { Route, Routes } from 'react-router'
function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
          <Route path="owners" element={<Owners />} />
          <Route path="vehicles" element={<Vehicles />} />
        </Route>
    </Routes>
  )
}

export default App;
