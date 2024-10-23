import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './Pages/Home.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Services from './Pages/Services.jsx';
import NotFound from './Pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/about',
        element:<AboutUs />
      },
      {
        path:'/services',
        element:<Services />
      },
    ],
    errorElement:<NotFound />
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
