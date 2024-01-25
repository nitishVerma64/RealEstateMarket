import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'
import Header from './component/Header.jsx'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/signin' element={ <Signin />}/>
        <Route path='/signup' element={ <Signup />}/>
        <Route path='/profile' element={ <Profile />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
