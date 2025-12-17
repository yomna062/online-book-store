import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from './Modules/Shared/components/AuthLayout/AuthLayout'
import Login from './Modules/AuthModule/Login/Login'
import Register from './Modules/AuthModule/Register/Register'
import ForgetPass from './Modules/AuthModule/ForgetPass/ForgetPass'
import ResetPass from './Modules/AuthModule/ResetPass/ResetPass'
import Home from './Modules/HomeModule/Components/Home/Home'
import MasterLayout from './Modules/Shared/components/MasterLayout/MasterLayout'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'forget-pass', element: <ForgetPass /> },
        { path: 'reset-pass', element: <ResetPass /> }
      ]
    },
    {
      path: '/home',
      element: <MasterLayout />,
      children: [
        { index: true, element: <Home /> },
        
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
}

export default App;
