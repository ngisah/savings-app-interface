import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Login from './Pages/Login';
import UserDashboard from "./Pages/UserDashboard";
import AdminLogin from "./Pages/AdminLogin";
import Registration from "./Pages/Registration";

const router = createBrowserRouter([
  {
    path: "/userdashboard",
    element: <UserDashboard />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />
  }

  
]);

function App() {
  return (
    <div>
       <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
