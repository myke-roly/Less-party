import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Main } from './pages/Main';
import { FaMusic } from 'react-icons/fa'
import { Info } from './pages/Info';
import { Detail } from './pages/Detail';

function App() {

  const handlePlayMusic = () => {
    const audio = new Audio('./music.mp3');
    audio.play();
  }

  return (
    <div>
      {/* <button onProgress={handlePlayMusic} className='absolute top-5 left-5 p-5 z-10 bg-[#81938A88] rounded-full'> */}
      <button onProgress={handlePlayMusic} className='absolute md:bottom-auto md:top-5 bottom-0 left-5 p-5 z-10 bg-[#81938A88] rounded-full'>
        <FaMusic color='white' size={18} />
      </button>
      <Carousel
        className="fullscreen-carousel bg-[#F9F7F2]"
        useKeyboardArrows
        verticalSwipe="natural"
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        showArrows={false}
        showIndicators
        emulateTouch
        autoPlay
        transitionTime={1000}
      >
        <Main />
        <Info />
        <Detail />
      </Carousel>
    </div>
  );
}

export default App;
