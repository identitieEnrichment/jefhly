import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './Pages/Home.jsx';
import NotFound from './Pages/NotFound.jsx';
import ContactUs from './Pages/ContactUs.jsx';

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
        path:'/contact',
        element:<ContactUs />
      },
    ],
    errorElement:<NotFound />
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
