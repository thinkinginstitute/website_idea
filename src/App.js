import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduction from './pages/Introduction';
import AboutMyself from './pages/AboutMyself';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import BottomContact from './components/BottomContact';
import Article from './pages/Article';
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
      <BottomContact />
    </div>
  );
}

export default App;
