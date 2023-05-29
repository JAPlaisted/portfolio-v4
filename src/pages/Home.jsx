import React from 'react';
import Navbar from '../components/nav.jsx'
import Hero from '../components/hero.jsx'
import Projects from '../components/projects.jsx'
import Skills from '../components/skills.jsx'
import Footer from '../components/footer.jsx'

function Home() {
    return (
        <div id="#top" className='container'>
            <Navbar/>
            <Hero/>
            <Projects/>
            <Skills/>
            <Footer/>
        </div>
    );
}

export default Home;