import React from 'react';
import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
import bucket1 from '../assets/bucket-1.webp'
import bucket2 from '../assets/bucket-2.webp'
import bucket3 from '../assets/bucket-3.jpg'

function BucketList() {
    return (
        <div className='container'>
            <Navbar/>
            <h2>BUCKET LIST</h2>
                <div className="bucket-list">
                    <div className="photo-grid">
                        <div className='polaroid'>
                            <div className="gloss">
                                <img className='polaroid-img' src={bucket1} alt="" />
                                <p>Isla Mujeres</p>
                            </div>
                        </div>
                        <div className='polaroid'>
                            <div className="gloss">
                                <img className='polaroid-img' src={bucket2} alt="" />
                                <p>Cozumel</p>
                            </div>
                        </div>
                        <div className='polaroid'>
                            <div className="gloss">
                                <img className='polaroid-img' src={bucket3} alt="" />
                                <p>Chichen Itza</p>
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        <p>
                        "At the end of your life, all you're left with is a story, so it better be a damn good one." -Jonathan Plaisted
                        <br/>
                        <br/>
                        My aim is to live a life of vibrant balance, where adventure, personal accomplishment, and love intertwine harmoniously. Adventure fuels my spirit, igniting a thirst for exploration and discovery. From traversing rugged terrains to diving into uncharted depths, I seek to immerse myself in the wild wonders of our world. Each step taken and every heart-pounding moment lived adds another chapter to the saga of my life.
                        <br/>
                        <br/>
                        Yet, personal accomplishment forms the backbone of my aspirations. I push the boundaries of my capabilities, constantly challenging myself to achieve new heights. Whether it's learning a new language, mastering a musical instrument, or honing a creative craft, I am driven by a relentless pursuit of growth and self-improvement. With each milestone reached, I sculpt a life that reflects my relentless dedication and unwavering determination.
                        <br/>
                        <br/>
                        Love, the golden thread woven through the tapestry of my existence, brings depth and meaning to every endeavor. I cherish the connections forged with kindred spirits, valuing the beauty of shared moments and the support found in the embrace of loved ones. In cultivating relationships and fostering deep bonds, I understand that love is the foundation upon which a life well-lived is built.
                        <br/>
                        <br/>
                        Join me on this extraordinary odyssey as I check off one exhilarating experience after another, crafting a narrative that is nothing short of remarkable. Together, let us seize the wonders of the world, conquer our dreams, and create a story that will be remembered for generations to come. For when our time on this earth draws to a close, it is the stories we leave behind that truly define our legacy.
                        </p>
                        <ul>
                            <li>7 World Wonders</li>
                            <ul>
                                <li>Great Pyramid of Giza</li>
                                <li>Great Wall of China</li>
                                <li>Taj Mahal</li>
                                <li>Petra</li>
                                <li>Machu Picchu</li>
                                <li className='complete'>Chichén Itzá</li>
                                <li className='complete'>Colosseum</li>
                            </ul>
                            <li>Mountains</li>
                            <ul>
                                <li>Washington (Winter)</li>
                                <li>Kilimanjaro</li>
                                <li>Fuji</li>
                                <li>Everest</li>
                            </ul>
                            <li>Continents</li>
                            <ul>
                                <li className='complete'>North America</li>
                                <li className='complete'>South America</li>
                                <li className='complete'>Europe</li>
                                <li>Africa</li>
                                <li>Asia</li>
                                <li>Antarctica</li>
                                <li>Australia</li>
                            </ul>
                            <li>Trails</li>
                            <ul>
                                <li>AT Trail</li>
                                <li>Pacific Crest Trail</li>
                                <li>The Great Divide</li>
                            </ul>
                            <li>Treasure Hunt</li>
                            <li className='complete'>Cross The Equator</li>
                            <li>Heist</li>
                            <li>Sell a Company</li>
                            <li>Act in a Movie</li>
                            <li className='complete'>Cross Country Drive</li>
                            <li className='complete'>Snorkeling in Great Meso American Barrier reef</li>
                            <li>Train at Shoalin Temple</li>
                            <li>Professional Fight</li>
                            <li>Long Form Podcast</li>
                        </ul>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default BucketList;