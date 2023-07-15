import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import PageProject from './pages/PageProject';
import Contacts from './pages/Contacts';

import ScrollToTop from './utils/scrollToTop';

import './styles/main.css';







function App() {
  return (
    <div className="App">

      <Router>
        <ScrollToTop/>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/project/:id' element={<PageProject/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Routes>

        <Footer />
        
      </Router>

      
    </div>
  );
}

export default App;
