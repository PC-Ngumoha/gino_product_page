import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="intro">
        <h1>Meet Gino</h1>
        <span>
          The legendary T-Rex is back! Jump, dodge, and survive in this endless
          prehistoric adventure.
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
  );
}
