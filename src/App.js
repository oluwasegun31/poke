import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Character from './components/character';
import Home from './components/home';
import Navbar from './components/navbar';
import { AnimatePresence } from 'framer-motion';
import About from './components/about';
import Error404 from './components/error404';


function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location = {location}>
        <Route 
          path='/'
          element={
            <section>
              <Navbar/>
              <Home />
            </section>
          }
        />

        <Route 
          path='/character'
          element={
            <section>
              <Navbar/>
              <div className="contain">
                <Character />
              </div>
            </section>
          }
        />
        
        <Route 
          path='/about'
          element={
            <section>
              <Navbar/>
              <About />
            </section>
          }
        />

        <Route 
          path='*'
          element={
            <section>
              <Navbar/>
              <Error404 />
            </section>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
