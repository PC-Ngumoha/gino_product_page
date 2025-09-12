import './App.css';

function App() {
  return (
    <>
      <section className="hero">
        <div className="intro">
          <h1>Meet Gino</h1>
          <span>
            The legendary T-Rex is back! Jump, dodge, and survive in this
            endless prehistoric adventure.
          </span>
          <div className="buttons">
            <button className="cactus-green">play now</button>
            <button className="earth-brown">watch trailer</button>
          </div>
        </div>
        <div className="image">
          <img
            src="images/Gino_hero_image.webp"
            alt="Image depicting the Dino standing in a field of Cacti."
            // width={100}
          />
        </div>
      </section>

      <section className="download-section">
        <h1 className="download-title">Download Gino Now!</h1>
        <p className="download-subtitle">
          Start your prehistoric adventure today. Available right now on Desktop
          platforms.
        </p>
        <div className="download-platforms">
          <div className="platform">
            {/* Desktop Icon */}
            <svg
              width="100"
              height="100"
              fill="none"
              stroke="#4ea44e"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="4" y="4" width="16" height="12" rx="2" />
              <rect x="9" y="18" width="6" height="2" rx="1" />
            </svg>
            <h2>Desktop</h2>
            <p>Windows, Mac &amp; Linux</p>
            <button className="download-btn cactus-green">
              download desktop
            </button>
          </div>
        </div>
        <p className="download-footer">
          Free to play &bull; No ads &bull; Smooth gaming experience
        </p>
      </section>

      <footer>
        <h3>
          &copy; {new Date().getFullYear()} Gino Game. All rights reserved.
        </h3>
        <p>Made with 💖 for retro gaming fans</p>
      </footer>
    </>
  );
}

export default App;
