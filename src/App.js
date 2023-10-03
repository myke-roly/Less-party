import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <div>
      <Carousel
        className="fullscreen-carousel"
        useKeyboardArrows
        verticalSwipe="natural"
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        showArrows={false}
        showIndicators
        emulateTouch
        autoPlay
        transitionTime={500}
      >
        <div style={{ height: '100vh', border: '1px solid red' }}>Leslie fiesta de cumpleaños</div>
        <div style={{ height: '100vh', border: '1px solid red' }}>Leslie fiesta de cumpleaños</div>
        <div style={{ height: '100vh', border: '1px solid red' }}>Leslie fiesta de cumpleaños</div>
      </Carousel>
    </div>
  );
}

export default App;
