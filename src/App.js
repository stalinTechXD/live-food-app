import React from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css";
import HeaderComponent from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
// always keep the code cleaner

const AppLayout = () => {
    return (
        <React.Fragment>
        <HeaderComponent />
        <Body />
        <Footer />
        </React.Fragment>
    )

    
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        errorElement : <Error />
    },
    {
        path:"/about",
        element : <About />,
    },
    {
        path:"/contact",
        element : <Contact />,
    }]
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);