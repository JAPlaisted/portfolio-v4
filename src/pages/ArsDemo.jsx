import React from 'react';
import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
import geocode from "../assets/geocoding.webp"
import geocode2 from "../assets/geocoding2.webp"
import mapping from "../assets/mapping.webp"
import posting from "../assets/posting.webp"
import routeSummary from "../assets/routeSummary.webp"
import hhClass from "../assets/hhClass.webp"
import arsLogin from "../assets/arsLogin.webp"

function ArsDemo() {
    return (
        <div className='container'>
            <Navbar/>
            <div className="ars-demo">
                <img className='arsLogo' src="https://advantageroute.com/wp-content/uploads/2020/10/ars-logo-gray-orange.png" alt="Advantage Route Systems" />
                <p className="arsDesc">
                Advantage Route Systems provides route optimization services to a multitude of delivery companies. I was a front end developer on this project, working in Vue.js, Amazon Web Services, Knex.js, Quasar, and Swagger. 
                </p>
                {/* Begin Screen 1 */}
                <div className="ars-media" data-aos="fade-up">
                    <img src={mapping} alt="geocoding screen"></img>
                    <div>
                        <h3>Mango Mapping</h3>
                        <p style={{ maxWidth: '800px', padding: 20 }}>The Mango Mapping page allows users to view routes based on filters. The routes can be altered from this page with a single or multiple drag and drop feature. </p>
                    </div>
                </div>
                {/* End Screen 1 */}
                <div className="ars-media" data-aos="fade-up">
                    <img src={geocode} alt="geocoding screen"></img>
                    <div>
                        <h3>Geocoding</h3>
                        <p style={{ maxWidth: '800px', padding: 20 }}>Mango Mapping – Geocoding allows users to view a route or routes and plot them on the map. </p>
                    </div>
                </div>
                <div className="ars-media" data-aos="fade-up">
                    <img src={geocode2} alt="geocoding screen"></img>
                    <div>
                        <h3>Verify Address</h3>
                        <p style={{ maxWidth: '800px', padding: 20 }}>Mango Mapping – Verify Address detects invalid addresses and suggests possible correct addresses to choose from. </p>
                    </div>
                </div>
                <div className="ars-media" data-aos="fade-up">
                    <img src={posting} alt="geocoding screen"></img>
                    <div>
                        <h3>Post Transactions</h3>
                        <p style={{ maxWidth: '800px', padding: 20 }}>The Post Transactions page allows users to post daily transactions to the database by either their invoice or by each route. </p>
                    </div>
                </div>
                <div className="ars-media" data-aos="fade-up">
                    <img src={routeSummary} alt="geocoding screen"></img>
                    <div>
                        <h3>Route Summary</h3>
                        <p style={{ maxWidth: '800px', padding: 20 }}>The Route Summary page provides a summary report of all transactions based on filters selected by the user. </p>
                    </div>
                </div>
                <div className="ars-media" data-aos="fade-up">
                    <img src={hhClass} alt="geocoding screen"></img>
                    <div>
                        <h3>Hand-Held Class</h3>
                        <p style={{ maxWidth: '800px', padding: 20 }}>The Hand-Held Class screen allows delivery drivers to update their own profile settings on their own device. </p>
                    </div>
                </div>
                <div className="ars-media" data-aos="fade-up">
                    <img src={arsLogin} alt="geocoding screen"></img>
                    <div>
                        <h3>Login</h3>
                        <p style={{ maxWidth: '800px', padding: 20 }}>The login screen allows the user to login. A second screen exists within this page to reset user passwords and return to the login screen.  </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ArsDemo;