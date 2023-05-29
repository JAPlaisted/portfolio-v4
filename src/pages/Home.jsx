import React from 'react';
import Navbar from '../components/nav.jsx'
import Hero from '../components/hero.jsx'

function Home(props) {
    return (
        <div id="#top" className='container'>
            <Navbar/>
            <Hero/>
            <div>Projects</div>
            <div>Skills</div>
            <div>Footer</div>
        </div>
    );
}

export default Home;