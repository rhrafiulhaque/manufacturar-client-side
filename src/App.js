import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>

  );
}

export default App;
