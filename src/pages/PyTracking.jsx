import React from 'react';
import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
import video from "../assets/webcam-tracking.mp4"
import GitHubIcon from '@mui/icons-material/GitHub';

function PyTracking() {
    return (
        <div className='container'>
            <Navbar/>
            <div className='py-tracking'>
                <video width="320" height="240" controls autoplay loop muted>
                    <source src={video}  type="video/mp4"></source>
                </video>
                <a href="https://github.com/JAPlaisted/facial-recognition">
                    <GitHubIcon style={{fontSize: "xx-large"}}/>
                </a>
                <h3>Python Tracking</h3>
                <p>The above video is a recording of a python script running <br/> over video from my webcam.
                The script tracks my face from <br/> frame to frame and puts a red box around it.
                I am currently <br/> developing this program to include functionality to recognize a <br/> human hand in the browser and allow it to interact with a website. <br/> This program is being developed with OpenCV and PyScript. <br/> Currently, the script does not run in the browser, but feel free to <br/> check out the GitHub to see the code.
                </p>
            </div>
            <Footer/>
        </div>
    );
}

export default PyTracking;