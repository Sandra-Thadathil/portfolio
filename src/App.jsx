import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import  ParticlesComponent from './components/particles'
import './App.css'
import NavBar from './components/NavBar';
export default function App() {
  return (
    <div className='app-wrapper'>
      <ParticlesComponent id="particles">
      </ParticlesComponent>
      <NavBar></NavBar>

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<><Home /> <Work /></>}></Route>
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
    </div>
  )
}
