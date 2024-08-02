import React from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css";
import HeaderComponent from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);