import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-view">
      <div className="overlay">
        <div className="landing-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/Rock-Dog-logo-400x265.png"
            alt=""
          />
          <h1>Welcome to Rock Dog Site</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A atque
            officia vitae consectetur.
          </p>
          <Link to="/home">
            <button>Discover More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
