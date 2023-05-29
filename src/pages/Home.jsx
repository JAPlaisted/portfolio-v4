import React from 'react';
import Navbar from '../components/nav.jsx'

function Home(props) {
    return (
        <div id="#top" className='container'>
            <Navbar></Navbar>
            <div >Hero</div>
            <div>Projects</div>
            <div>Skills</div>
            <div>Footer</div>
        </div>
    );
}

export default Home;