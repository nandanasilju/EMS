import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Pnf from './pages/Pnf'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        {/*http://localhost:5173/*/}
        <Route path='/' element={<LandingPage />} />
        {/*http://localhost:5173/login*/}
        <Route path='/login' element={<Login/>} />
        {/*http://localhost:5173/register*/}
        <Route path='/register' element={<Register/>} />
        {/*http://localhost:5173/dashboard*/}
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='*' element={<Pnf/>} />
      </Routes>
      <Footer />
     
    </>
  )
}

export default App
