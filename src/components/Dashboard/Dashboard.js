import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-4xl font-bold text-purple-500 text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-50 bg-base-200 text-base-content mr-4">
                    {/* <!-- Sidebar content here --> */}
                    {
                        !admin && <>
                            <li><Link to="/dashboard">My Orders</Link></li>
                            <li><Link to="/dashboard/addreview">Add Review</Link></li></>
                    }
                    {admin && <>
                        <li><Link to="/dashboard/users">Make Admin</Link></li>
                        <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                        <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                        <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
                    </>}
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;