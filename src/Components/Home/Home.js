import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial';
import Partners from './Partners';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='text-balance'>
            <Nav/>
            <Banner/>
            <About/>
            <Services/>
            <Resume/>
            <Portfolio/>
            <Testimonial/>
            <Partners/>
            <Blog/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;