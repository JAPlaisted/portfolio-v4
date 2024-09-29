import React from 'react';
import { HashLink } from 'react-router-hash-link';

function nav() {
    return (
        <nav className='navbar'>
            <ul>
                <li><HashLink className='link' to="/#top">J</HashLink></li>
                <li><HashLink className='link' to="/#projects">Work</HashLink></li>
                <li><HashLink className='link' to="/#skills">Skills</HashLink></li>
                {/* <li><HashLink className='link' to="/book">Book</HashLink></li> */}
            </ul>
        </nav>
    );
}

export default nav;