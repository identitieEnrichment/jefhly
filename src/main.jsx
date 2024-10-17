import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './Components/Home.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Services from './Components/Services.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Home />, // Error handling
    children: [
      {
        path: '/', 
        element: <Home />, 
      },
      {
        path: '/about', 
        element: <AboutUs />, 
      },
      {
        path: '/services', 
        element: <Services />, 
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
