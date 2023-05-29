import React from 'react';
import Navbar from '../components/nav.jsx'
import Hero from '../components/hero.jsx'
import Projects from '../components/projects.jsx'
import Skills from '../components/skills.jsx'

function Home(props) {
    return (
        <div id="#top" className='container'>
            <Navbar/>
            <Hero/>
            <Projects/>
            <Skills/>
            <div>Footer</div>
        </div>
    );
}

export default Home;