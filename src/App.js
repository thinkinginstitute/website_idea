import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduction from './pages/Introduction';
import { Article } from '@mui/icons-material';
import AboutMyself from './pages/AboutMyself';
import Contact from './pages/Contact';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Introduction}></Route>
        <Route path='/article' Component={Article}></Route>
        <Route path='/about' Component={AboutMyself}></Route>
        <Route path='/contacts' Component={Contact}></Route>
      </Routes>
    </div>
  );
}

export default App;
