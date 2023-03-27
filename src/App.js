import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Login from './Pages/Login';
import UserDashboard from "./Pages/UserDashboard";

const router = createBrowserRouter([
  {
    path: "/userdashboard",
    element: <UserDashboard />,
  },
  {
    path: "/login",
    element: <Login />
  },
  
]);

function App() {
  return (
    <div>
       <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
