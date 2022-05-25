import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Purchase from './components/Purchase/Purchase';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import AddReview from './components/Dashboard/AddReview';
import Products from './components/Products/Products';
import MyProfile from './components/Dashboard/MyProfile';
import Users from './components/Users/Users';
import RequireAdmin from './components/RequireAdmin/RequireAdmin';
import AddProduct from './components/AddProduct/AddProduct';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import useAdmin from './components/Hooks/useAdmin';
import WelcomAdmin from './components/WelcomAdmin/WelcomAdmin';
import ManageProducts from './components/ManageProducts/ManageProducts';
import ManageOrder from './components/ManageOrder/ManageOrder';
import Payment from './components/Dashboard/Payment';
import NotFound from './components/NotFound/NotFound';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';

function App() {
  const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
  return (
    <div class="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          {!admin&&<Route index element={<MyOrders></MyOrders>}></Route>}
          {admin&&<Route index element={<WelcomAdmin></WelcomAdmin>}></Route>}
          <Route path='/dashboard/addreview' element={<AddReview></AddReview>}></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
          <Route path='/dashboard/users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='/dashboard/addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='/dashboard/manageproducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='/dashboard/manageorder' element={<RequireAdmin><ManageOrder></ManageOrder></RequireAdmin>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>

  );
}

export default App;
