import React from 'react';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import CssIcon from '@mui/icons-material/Css';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SmartToyIcon from '@mui/icons-material/SmartToy';

function skills() {
    return (
        <div id="skills">
            <h2>Skills</h2>
            <div className='skills'>
                <div className="row">
                    <div className="media" data-aos="fade-left">
                        <DeveloperModeIcon className='skill-icon' style={{fontSize: "xx-large"}}/>
                        <h4>Front End Development</h4>
                        <p>As a specialized front-end developer with expertise in React, I thrive on solving complex problems and designing intuitive user interfaces.</p>
                    </div>
                    <div className="media" data-aos="fade-left">
                        <RemoveRedEyeIcon className='skill-icon' style={{fontSize: "xx-large"}}/>
                        <h4>Python</h4>
                        <p>I am innovating ways to leverage Python in the browser through computer vision, to enhance interactivity and user engagement on the web.</p>
                    </div>
                    <div className="media" data-aos="fade-left">
                        <ScreenshotMonitorIcon className='skill-icon' style={{fontSize: "xx-large"}}/>
                        <h4>Responsive Design</h4>
                        <p>I specialize in designing and developing responsive web applications that seamlessly adapt to all screen sizes, including desktop and mobile devices.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="media" data-aos="fade-left">
                        <EqualizerIcon className='skill-icon' style={{fontSize: "xx-large"}}/>
                        <h4>Data Visualization</h4>
                        <p>I leverage cutting-edge data visualization tools to craft compelling narratives and deliver engaging user experiences.</p>
                    </div>
                    <div className="media" data-aos="fade-left">
                        <CssIcon className='skill-icon' style={{fontSize: "xx-large"}}/>
                        <h4>CSS</h4>
                        <p>I firmly believe that custom CSS, when paired with a CSS library, offers a powerful toolset for efficient web development while maintaining an element of uniqueness in the design.</p>
                    </div>
                    <div className="media" data-aos="fade-left">
                        <SmartToyIcon className='skill-icon' style={{fontSize: "xx-large"}}/>
                        <h4>Prompt Engineering</h4>
                        <p>As an AI developer, I design robust and reliable prompts that generate consistent results for both image and text generation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default skills;