import './Hero.css';
import { useState } from 'react';

export default function Hero() {
  const [showTrailer, setShowTrailer] = useState(false);

  // Toggle whether the trailer is showing or not.
  const toggleTrailerState = () => setShowTrailer((prev) => (prev = !prev));

  // Cause download section to smoothly scroll into view when button clicked.
  const moveToDownloadSection = () => {
    const downloadSection = document.getElementById('download');
    downloadSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="intro">
        <h1>Meet Gino</h1>
        <span>
          The legendary T-Rex is back! Jump, dodge, and survive in this endless
          prehistoric adventure.
        </span>
        <div className="buttons">
          <button className="cactus-green" onClick={moveToDownloadSection}>
            Play now
          </button>
          <button className="earth-brown" onClick={toggleTrailerState}>
            {showTrailer ? 'Hide' : 'See'} trailer
          </button>
        </div>
      </div>
      <div className="image">
        <img
          src={showTrailer ? 'images/gino.gif' : 'images/Gino_hero_image.webp'}
          alt="Image depicting the Dino standing in a field of Cacti."
        />
      </div>
    </section>
  );
}
