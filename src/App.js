import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Main } from './pages/Main';
import { FaMusic } from 'react-icons/fa'
import { Info } from './pages/Info';

function App() {

  const handlePlayMusic = () => {
    const audio = new Audio('./music.mp3');
    audio.play();
  }

  return (
    <div>
      <button onProgress={handlePlayMusic} className='absolute  top-5 left-5 p-5 z-10 bg-neutral-200 rounded-full'>
        <FaMusic />
      </button>
      <Carousel
        className="fullscreen-carousel"
        useKeyboardArrows
        verticalSwipe="natural"
        showThumbs={false}
        showStatus={false}
        infiniteLoop={false}
        showArrows={false}
        showIndicators
        emulateTouch
        autoPlay={false}
        transitionTime={500}
      >
        <Info />
        <Main />
      </Carousel>
    </div>
  );
}

export default App;
