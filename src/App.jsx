
import './App.css'
import Welcome from './pages/Welcome/Welcome'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Vehicles from './components/Vehicles/Vehicles'
import Owners from './components/Owners/Owners'
import Dashboard from './pages/Dashboard/Dashboard'
// import PrivateRoute from './components/PrivateRoute/PrivateRoute'

import { Route, Routes } from 'react-router'
import PrivatePage from './components/PrivateRoute/PrivatePage'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard/*' element={<PrivatePage children={<Dashboard />} />} >
        <Route path='owners' element={<Owners />} />
        <Route path='vehicles' element={<Vehicles />} />
      </Route>
    </Routes>
  )
}

export default App;
