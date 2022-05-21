import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route></Route>
      </Routes>
      <Home></Home>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>

  );
}

export default App;
