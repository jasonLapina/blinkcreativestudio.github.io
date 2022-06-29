import React from 'react';
import './Tagline.css';

function Tagline() {

  return (
      <div className='tagline-container'>
          <section className='tagline-image-section'>
            <img className='tagline-image' src='/assets/alexander-the-great.png' alt='Alexander The Great'/>
          </section>

          <section className='tagline-content'>
            <h2 className='tagline-header'>
                Ideas made effective
            </h2>
            <p className='tagline-paragraph'>
                When excellence is not an option but an obligation - let's say we make it a habit, that's when we create innovative solutions that drive society and creativity forward.
            </p>
          </section>
      </div>
  );
}

export default Tagline;