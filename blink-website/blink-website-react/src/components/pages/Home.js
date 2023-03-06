import './Home.css';
import { useState } from 'react';
import Showreel from './Showreel';

function Home() {
    const [showreelStatus, setShowreelStatus] = useState(false);

    function handleShowreelButtonClick() {
        if(!showreelStatus){
            setShowreelStatus(true);
        } 
        else {
            setShowreelStatus(false);
        }
    }

    return(
        <div className='home-container'>
            <section className='home-content'>
                <h2 className='home-header'>
                    Here at <b>Blink</b> Creative Studio
                </h2>
                <p className='home-paragraph'>
                    We convey and connect through <br />
                    <span className='word-loop'>videos.</span>
                    <span className='word-loop'>campaigns.</span>
                    <span className='word-loop'>events.</span>
                    <span className='word-loop'>photos.</span>
                </p>

                <div className='home-watch-showreel-button' onClick={handleShowreelButtonClick} id='watch-showreel-button'>
                    <div className='home-watch-showreel-button-text'>
                        <div>Watch our showreel</div>
                    </div>
                </div>
            </section>

            <section className='home-image-section'>
                <img className='home-image' src='/assets/header img.png' alt='Header'/>
            </section>

            <Showreel show={showreelStatus} close={handleShowreelButtonClick} />
      </div>
    );
}

export default Home;