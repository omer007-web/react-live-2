import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import News from './components/News';
import Footer from './components/Footer';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <>
        <Navbar />
        <Banner />
       <Service /> 
        <Testimonial />
        <News />
        <Footer />
        
        </>
    );
};

export default App;