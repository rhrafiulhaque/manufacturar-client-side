import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import MyProfile from './components/MyProfile/MyProfile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Purchase from './components/Purchase/Purchase';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myprofile' element={<MyProfile></MyProfile>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>

  );
}

export default App;
