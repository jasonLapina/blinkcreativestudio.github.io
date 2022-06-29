import React from 'react';

function Livestream () {
    return(
        <section className='livestream-section'>
          <div className='livestream-container'>
            <div className='livestream-video-container'>
              <iframe className='livestream-video' title='livestream-video' src="https://player.vimeo.com/video/704470909?h=1989abdff8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen ></iframe>
            </div>
            <iframe title='livestream-chat'src="https://vimeo.com/event/2049241/chat/" width="400" height="600" frameborder="0"></iframe>
          </div>
        </section>
    );
}

export default Livestream;