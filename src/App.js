import { Route, Routes } from 'react-router-dom';
import './App.css';
import Character from './components/character';
import Home from './components/home';
import Navbar from './components/navbar';


function App() {
  return (
    <Routes>
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
            <Character />
          </section>
        }
      />
    </Routes>
  );
}

export default App;
