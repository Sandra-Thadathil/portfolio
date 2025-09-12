import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Project from './pages/Project'
import Contact from './pages/Contact'
import  ParticlesComponent from './components/particles'
import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
export default function App() {
  return (
    <div className='app-wrapper'>
      <ParticlesComponent id="particles">
      </ParticlesComponent>
      <NavBar></NavBar>

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element=
            {
              <>
              <div className="section-spacing">
                  <Home />
                </div>
                <div className="section-spacing">
                  <Work /> 
                </div>
                <div className="section-spacing">
                    <Project />
                </div> 
                <div className="section-spacing">
                    <Contact />
                </div> 
              </>
            }>
          </Route>
          <Route path="/work" element={<Work />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  )
}
