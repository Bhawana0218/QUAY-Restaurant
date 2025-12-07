import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './Pages/Menu';
import Footer from './Footer';
import Home from './Pages/Home';
import Onlineorder from './Pages/Onlineorder';
import Reservation from './Pages/Reservation';
import Success from './Pages/Success';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/order" element={<Onlineorder></Onlineorder>}></Route>
        <Route path="/reservation" element={<Reservation></Reservation>}></Route>
        <Route path="/success" element={<Success></Success>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  )
}

export default App;
