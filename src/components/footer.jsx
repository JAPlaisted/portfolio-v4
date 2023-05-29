import React from 'react';
import { HashLink } from 'react-router-hash-link';

function footer() {
    return (
        <div className='footer'>
            <HashLink className="top-link" to="/#top">J</HashLink>
            <p>Designed & Developed By Jonathan Plaisted</p>
        </div>
    );
}

export default footer;